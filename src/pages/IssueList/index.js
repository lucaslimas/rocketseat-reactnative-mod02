import React, { Component } from 'react';

import { FlatList } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';

import {
  Container, SearchContent, Input, Button, Error, BusyIndicator,
} from './styles';

import { colors } from '~/styles';

import Icon from 'react-native-vector-icons/FontAwesome';

import IssueItem from '~/components/IssueItem';

const STORAGE_VAR = {
  LIST: '@Gihuber:repositories',
};

export default class IssueList extends Component {
  static navigationOptions = {
    title: 'GitIssues',
  };

  state = {
    error: null,
    loading: false,
    refreshing: false,
    repositoryInput: '',
    list: [],
  };

  async componentDidMount() {
    // await AsyncStorage.setItem(STORAGE_VAR.LIST, JSON.stringify([]));
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const list = JSON.parse(await AsyncStorage.getItem(STORAGE_VAR.LIST)) || [];

    this.setState({
      list,
      refreshing: false,
      error: null,
    });
  };

  removeRepository = async (id) => {
    this.setState({
      refreshing: true,
    });
    try {
      const { list } = this.state;

      const repositoriesUpdated = list.filter(repo => repo.id !== id) || [];

      await AsyncStorage.setItem(STORAGE_VAR.LIST, JSON.stringify(repositoriesUpdated));

      this.setState({
        error: null,
        list: repositoriesUpdated,
        refreshing: false,
      });
    } catch (err) {
      this.setState({
        error: 'Não foi possível remover o repositório',
        refreshing: true,
      });
    }
  };

  renderItem = ({ item }) => <IssueItem data={item} onRemove={this.removeRepository} />;

  addRepository = async () => {
    const { repositoryInput, list, loading } = this.state;

    if (loading) return;

    this.setState({ loading: true });

    if (!repositoryInput) {
      this.setState({ error: 'Informe o repositório', loading: false });
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repositoryInput}`);

      if (list.find(repo => repo.id === data.id)) {
        this.setState({ error: 'Já existe esse repositório ', loading: false });
        return;
      }

      const repositories = [...list, data];

      await AsyncStorage.setItem(STORAGE_VAR.LIST, JSON.stringify(repositories));

      this.setState({
        repositoryInput: null,
        loading: false,
        list: repositories,
        error: null,
      });
    } catch (err) {
      console.log(err);

      this.setState({
        error: 'Repositório não encontrado',
        loading: false,
      });
    }
  };

  render() {
    const {
      list, repositoryInput, error, loading, refreshing,
    } = this.state;

    return (
      <Container>
        {!!error && <Error>{error}</Error>}
        <SearchContent>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repositoryInput}
            onChangeText={text => this.setState({ repositoryInput: text })}
          />
          <Button onPress={this.addRepository}>
            {loading ? (
              <BusyIndicator size="small" />
            ) : (
              <Icon name="plus" size={20} color={colors.black} />
            )}
          </Button>
        </SearchContent>

        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
          onRefresh={this.loadRepositories}
          refreshing={refreshing}
        />
      </Container>
    );
  }
}
