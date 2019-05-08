import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import {
  Container,
  Image,
  Content,
  ContentCenter,
  ContentHeader,
  ContentDescription,
  Button,
  ButtonText,
  Actions,
} from './styles';

const IssueItem = ({
  data: {
    id,
    name,
    owner: { login, avatar_url },
  },
  navigation: { navigate },
  onRemove,
}) => (
  <Container onPress={() => navigate('IssueDetail', { name, id })}>
    <ContentCenter>
      <Image source={{ uri: avatar_url }} />
    </ContentCenter>
    <Content>
      <ContentHeader>{name}</ContentHeader>
      <ContentDescription>{login}</ContentDescription>
    </Content>
    <Actions>
      <Button onPress={() => onRemove(id)}>
        <ButtonText>
          <Icon name="close" size={20} color={colors.danger} />
        </ButtonText>
      </Button>
      <Icon name="angle-right" size={20} color={colors.regular} />
    </Actions>
  </Container>
);

IssueItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  data: PropTypes.shape({
    icon: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
export default withNavigation(IssueItem);
