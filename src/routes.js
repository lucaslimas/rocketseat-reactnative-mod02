import { createAppContainer, createStackNavigator } from 'react-navigation';

import IssueList from '~/pages/IssueList';
import IssueDetail from '~/pages/IssueDetail';

const Routes = createAppContainer(
  createStackNavigator(
    {
      IssueList,
      IssueDetail,
    },
    {
      headerLayoutPreset: 'center',
    },
  ),
);

export default Routes;
