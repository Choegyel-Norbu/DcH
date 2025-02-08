import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {FlatList, Pressable, ScrollView} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import {dummyArray} from '../../components/DummyArray';

export default function ProfileScr() {
  const [selectedType, setSelectedType] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Donation', value: 'Donation'},
    {label: 'Physical service', value: 'Physical service'},
    {label: 'Tution', value: 'Tution'},
    {label: 'Online consultant', value: 'Online consultation'},
    {label: 'Other', value: 'Other'},
  ]);
  const [isActive, setIsActive] = useState(true);

  const serviceOffers = dummyArray();

  const renderServiceList = ({item}) => {
    return (
      <View style={styles.serviceItem}>
        <Text style={{fontSize: 14, fontWeight: '200'}}>{item.service}</Text>
        <Text style={{backgroundColor: 'green', color: '#fff', width: 'auto'}}>
          {item.status}
        </Text>
        <Text>{item.date}</Text>
      </View>
    );
  };

  const handleServiceSubmit = () => {};

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImg}>
          <Image
            style={{height: 90, width: 90, borderRadius: 60}}
            source={require('../../images/wasp.jpg')}
          />
        </View>
        <View style={styles.profileDetail}>
          <Text style={{fontWeight: '700', fontSize: 16}}>Profile name</Text>
          <Text style={{marginBottom: 10, fontSize: 12}}>
            tashiwangmo94@gmail.com
          </Text>
          <Button title="Edit profile" />
        </View>
      </View>

      {/* Add Service container */}
      <View style={styles.serviceContainer}>
        <Text style={styles.title}>Select Services You Provide</Text>
        <View style={styles.dropDownMainContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            multiple={true}
            min={1}
            max={3}
            setOpen={setOpen}
            setValue={setValue}
            mode="BADGE"
            setItems={setItems}
            style={{
              backgroundColor: '#fff',
              borderColor: 'gray',
              padding: 10,
              margin: 'auto',
            }}
            textStyle={{fontSize: 16}}
            placeholder="Select services"
            dropDownContainerStyle={{
              backgroundColor: '#f2f2f2',
              borderColor: '#737373',
              margin: 'auto',
            }}
            listItemContainerStyle={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#f2f2f2',
              paddingVertical: 10,
            }}
            listItemLabelStyle={{fontSize: 16, color: '#737373'}}
          />
        </View>
        <TouchableOpacity
          onPress={handleServiceSubmit}
          style={styles.serviceSubBtn}>
          <Text style={{color: '#fff', fontSize: 16}}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Service list */}
      <View style={styles.serviceListContainer}>
        <Text style={{fontSize: 16, fontWeight: '700', marginLeft: 10}}>
          List of services you offered.
        </Text>

        {serviceOffers.map((item, index) => (
          <View key={index} style={styles.serviceItem}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginVertical: 3,
                }}>
                <Image
                  source={item.imgSrc}
                  style={{height: 30, width: 30, marginRight: 5}}
                />
                <Text style={{fontSize: 14, fontWeight: '200'}}>
                  {item.service}
                </Text>
              </View>

              <Text style={{fontSize: 10}}>{item.date}</Text>
            </View>
            {isActive ? (
              <Text
                style={{
                  backgroundColor: '#00b33c',
                  color: '#fff',
                  alignSelf: 'flex-start',
                  padding: 5,
                  borderRadius: 20,
                  fontSize: 12,
                }}>
                {item.status}
              </Text>
            ) : (
              <Text
                style={{
                  backgroundColor: '#cc0000',
                  color: '#fff',
                  alignSelf: 'flex-start',
                  padding: 5,
                  borderRadius: 20,
                  fontSize: 12,
                }}>
                {item.status}
              </Text>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  profileHeader: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  profileImg: {
    marginLeft: 20,
  },
  profileDetail: {
    marginLeft: 20,
  },
  dropDownMainContainer: {
    width: '97%',
    height: 'auto',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 10,
    paddingBottom: 10,
  },
  serviceSubBtn: {
    backgroundColor: '#ff6600',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    margin: 'auto',
    marginTop: 20,
  },
  serviceListContainer: {
    width: '100%',
    padding: 10,
  },
  serviceItem: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 0,
    borderRadius: 5,
    elevation: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
