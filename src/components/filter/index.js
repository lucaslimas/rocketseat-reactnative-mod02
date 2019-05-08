import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Container, ButtonText, ButtonTextSelected } from './styles';

const Filter = ({ filterBy, onChangeFilter }) => (
  <Container>
    {filterBy === 'all' ? (
      <ButtonTextSelected>Todas</ButtonTextSelected>
    ) : (
      <ButtonText onPress={() => onChangeFilter('all')}>todas</ButtonText>
    )}

    {filterBy === 'open' ? (
      <ButtonTextSelected>Abertas</ButtonTextSelected>
    ) : (
      <ButtonText onPress={() => onChangeFilter('open')}>Abertas</ButtonText>
    )}

    {filterBy === 'closed' ? (
      <ButtonTextSelected>Fechadas</ButtonTextSelected>
    ) : (
      <ButtonText onPress={() => onChangeFilter('closed')}>Fechadas</ButtonText>
    )}
  </Container>
);

Filter.propTypes = {
  filterBy: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
