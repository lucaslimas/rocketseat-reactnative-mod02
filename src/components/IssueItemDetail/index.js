/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '~/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { Linking } from 'react-native';

import {
  Container,
  Image,
  Content,
  ContentCenter,
  ContentHeader,
  ContentDescription,
} from './styles';

const IssueItemDetail = ({
  data: {
    title,
    user: { avatar_url, login },
    html_url,
  },
}) => (
  <Container onPress={() => Linking.openURL(html_url)}>
    <ContentCenter>
      <Image source={{ uri: avatar_url }} />
    </ContentCenter>
    <Content>
      <ContentHeader numberOfLines={1} ellipsizeMode="tail">
        {title}
      </ContentHeader>
      <ContentDescription>{login}</ContentDescription>
    </Content>
    <ContentCenter>
      <Icon name="angle-right" size={20} color={colors.regular} />
    </ContentCenter>
  </Container>
);

IssueItemDetail.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    user: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
    html_url: PropTypes.string,
  }).isRequired,
};
export default withNavigation(IssueItemDetail);
