import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PrivateView from './private/PrivateView';
import SearchView from './search/SearchView';
import ProfileView from './profile/ProfileView';
import CameraView from './camera/CameraView';
import GroupsView from './groups/GroupsView';

class Dashboard extends Component{
  constructor(){
    super();
    this.state = {
      selectedTab: 'Camera'
    }
  }
  render(){
    return (
      <TabBarIOS>
      <Icon.TabBarItemIOS
        title='Profile'
        selected={this.state.selectedTab === 'Profile'}
        iconName='ios-person'
        onPress={() => this.setState({ selectedTab: 'Profile' })}
      >
        <ProfileView />
      </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title='Search'
          selected={this.state.selectedTab === 'Search'}
          iconName='ios-search'
          onPress={() => this.setState({ selectedTab: 'Search' })}
        >
          <SearchView />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title=''
          selected={this.state.selectedTab === 'Camera'}
          iconName='ios-camera'
          onPress={() => this.setState({ selectedTab: 'Camera' })}
        >
          <CameraView />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title='Private'
          selected={this.state.selectedTab === 'Private'}
          iconName='ios-body'
          onPress={() => this.setState({ selectedTab: 'Private' })}
        >
          <PrivateView />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title='Public'
          selected={this.state.selectedTab === 'Groups'}
          iconName='ios-people'
          onPress={() => this.setState({ selectedTab: 'Groups' })}
        >
          <GroupsView />
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }
}

export default Dashboard;
