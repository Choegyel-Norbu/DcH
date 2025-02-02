import {StyleSheet, Pressable, Text, View, Image} from 'react-native';
import React from 'react';

export default function ImageCard() {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: 'https://via.placeholder.com/150'}} // Replace with your image URL
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text style={styles.cardDescription}>
          This is a simple description of the card content. You can add more
          details here.
        </Text>
      </View>
      {/* <View style={styles.cardFooter}>
        <Pressable style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Read More</Text>
        </Pressable>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  cardFooter: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardButton: {
    backgroundColor: '#3399ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
