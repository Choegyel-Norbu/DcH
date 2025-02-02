import {
  Alert,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MiniCards from '../cards/MiniCards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {OfferList} from '../constant/OfferItem';
import ImageCard from '../cards/ImageCard';

export default function HomeScr() {
  const offerList = OfferList();

  const renderOfferTemp = ({item}) => {
    return (
      <View style={styles.offerCarouselItems}>
        <Image source={{uri: item.uri}} style={{width: 250, height: 150}} />
        <View style={styles.cardText}>
          <Text>{item.name}</Text>
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#3399ff" barStyle="light-content" />
      <View style={styles.homeHeader}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 35,
            color: '#fff',
            elevation: 20,
          }}>
          Welcome
        </Text>
        <Pressable onPress={() => Alert.alert('more-vert')}>
          <Icon name="more-vert" size={25} color="#fff" />
        </Pressable>
      </View>
      <View style={styles.homeContainer}>
        <View style={styles.contentFeatures}>
          <Pressable
            onPress={() => Alert.alert('Pressed')}
            style={styles.pressable}>
            <MiniCards filePath={require('../images/post.png')} title="Post" />
          </Pressable>

          <Pressable
            onPress={() => Alert.alert('Pressed')}
            style={styles.pressable}>
            <MiniCards
              filePath={require('../images/donate.png')}
              title="Donate"
            />
          </Pressable>

          <Pressable
            onPress={() => Alert.alert('Pressed')}
            style={styles.pressable}>
            <MiniCards filePath={require('../images/chats.png')} title="Chat" />
          </Pressable>

          <Pressable
            onPress={() => Alert.alert('Pressed')}
            style={styles.pressable}>
            <MiniCards filePath={require('../images/post2.png')} title="PR" />
          </Pressable>
        </View>
        <View style={styles.offerCarousel}>
          <FlatList
            horizontal
            data={offerList}
            keyExtractor={item => item.id}
            renderItem={renderOfferTemp}
          />{' '}
          */}
        </View>
        <View>
          <ImageCard />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    padding: 10,
    backgroundColor: '#3399ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 40,
    paddingBottom: 20,
  },
  homeContainer: {
    backgroundColor: '#f2f2f2',
    flexWrap: 'wrap',
    height: '90%',
    width: '95%',
    margin: 'auto',
    borderTopRightRadius: 20,

    transform: [
      {translateX: 0}, // Move 100 units along the X-axis
      {translateY: -40}, // Move 50 units along the Y-axis
    ],
  },
  contentFeatures: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 20,
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    borderBottomWidth: 0.5,
    shadowColor: 'e6e6e6',
    shadowOffset: 2,
    shadowOffset: {width: 2, height: 2}, // X, Y position
    shadowOpacity: 0.5, // Shadow transparency
    shadowRadius: 3, // Softness of the shadow
  },
  offerCarousel: {},
  offerCarouselItems: {
    height: 'auto',
    width: 'auto',
    padding: 2,
    padding: 5,
  },
  cardText: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    fontSize: 10,
    paddng: 20,
  },
});
