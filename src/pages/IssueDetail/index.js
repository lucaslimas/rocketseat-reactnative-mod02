import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';
import { FlatList } from 'react-native';

import Filter from '~/components/filter';

import IssueItemDetail from '~/components/IssueItemDetail';

import { Container, Error, Message } from './styles';

class IssueDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name'),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    message: null,
    error: null,
    refreshing: false,
    filterBy: 'all',
    list: [],
  };

  componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async (filterByParam) => {
    this.setState({
      refreshing: true,
      message: null,
    });

    try {
      const { navigation } = this.props;

      const { filterBy } = this.state;

      const id = navigation.getParam('id');

      const { data } = await api.get(
        `/repositories/${id}/issues?state=${filterByParam || filterBy}`,
      );

      this.setState({
        list: data,
        message: data.length > 0 ? null : 'Nenhum dado encontrado',
        refreshing: false,
      });
    } catch (err) {
      this.setState({
        error: 'Não foi possível carregar as informações',
        refreshing: false,
      });
    }
  };

  renderItem = ({ item }) => <IssueItemDetail data={item} />;

  onChangeFilter = async (filterBy) => {
    this.setState({
      filterBy,
    });
    this.loadIssues(filterBy);
  };

  render() {
    const {
      list, filterBy, refreshing, error, message,
    } = this.state;
    return (
      <Container>
        <Filter filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
        {!!error && <Error>{error}</Error>}
        {!!message && <Message>{message}</Message>}
        <FlatList
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
          onRefresh={this.loadIssues}
          refreshing={refreshing}
        />
      </Container>
    );
  }
}

export default IssueDetail;
