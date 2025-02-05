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
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MiniCards from '../../cards/MiniCards';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {OfferList} from '../../constant/OfferItem';
import ImageCard from '../../cards/ImageCard';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScr({navigation}) {
  const offerList = OfferList();

  const renderOfferTemp = ({item}) => {
    return <ImageCard offerItems={item} />;
  };

  const logOut = () => {};
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#3399ff" barStyle="light-content" />
      <LinearGradient
        colors={['#0066cc', '#3399ff']}
        style={styles.homeHeader}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 0}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 35,
            color: '#fff',
            elevation: 20,
          }}>
          Welcome
        </Text>
        <Pressable onPress={logOut}>
          <Icon name="more-vert" size={25} color="#fff" />
        </Pressable>
      </LinearGradient>

      <View style={styles.homeContainer}>
        <View style={styles.contentFeatures}>
          <Pressable
            onPress={() => navigation.navigate('PRdetails')}
            style={styles.pressable}>
            <MiniCards
              filePath={require('../../images/post.png')}
              title="Post"
            />
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('HRlisting')}
            style={styles.pressable}>
            <MiniCards
              filePath={require('../../images/donate.png')}
              title="Donate"
            />
          </Pressable>

          <Pressable
            onPress={() => Alert.alert('Pressed')}
            style={styles.pressable}>
            <MiniCards
              filePath={require('../../images/chats.png')}
              title="Chat"
            />
          </Pressable>

          <Pressable
            onPress={() => Alert.alert('Pressed')}
            style={styles.pressable}>
            <MiniCards
              filePath={require('../../images/post2.png')}
              title="PR"
            />
          </Pressable>
        </View>
        <View style={styles.offerCarousel}>
          <Text style={{marginTop: 20}}> OFFERS</Text>
          <FlatList
            horizontal
            data={offerList}
            keyExtractor={item => item.id}
            renderItem={renderOfferTemp}
            showsHorizontalScrollIndicator={false}
          />
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
    borderTopLeftRadius: 20,
    transform: [{translateX: 0}, {translateY: -40}],
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
