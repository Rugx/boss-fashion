import React, { Component } from 'react';
import { TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PrivateView from './private/PrivateView';
import SearchView from './search/SearchView';
import ProfileView from './profile/ProfileView';
import CameraView from './camera/CameraView';
import PlayView from './play/PlayView';

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
        iconName='ios-person' md="md-person"
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
          title='Friends'
          selected={this.state.selectedTab === 'Private'}
          iconName='ios-people'
          onPress={() => this.setState({ selectedTab: 'Private' })}
        >
          <PrivateView />
        </Icon.TabBarItemIOS>

        <Icon.TabBarItemIOS
          title='Stream'
          selected={this.state.selectedTab === 'Groups'}
          iconName='ios-play'
          onPress={() => this.setState({ selectedTab: 'Groups' })}
        >
          <PlayView />
        </Icon.TabBarItemIOS>

      </TabBarIOS>
    )
  }
}

export default Dashboard;
