import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from './Header';
import { maindata } from '../src/data.js';

const HomeScreen = () => {
  const [data, setData] = useState(maindata);
  const [selectedCategory, setSelectedCategory] = useState('Astrologer');
  const [searchInput, setSearchInput] = useState('');

  const filteredCategories = maindata?.[selectedCategory].filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box}>
      <View>
        <Image style={styles.imgout} source={item.flg} />
        <Image style={styles.img} source={item.pic} />
      </View>
      <Text style={styles.textmain}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        setSelectedCategory={setSelectedCategory}
        searchInput={searchInput}
        onSearchChange={setSearchInput}
      />
      <FlatList
        data={filteredCategories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        columnWrapperStyle={styles.row} 
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  },
  box: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    width: '22%',
    backgroundColor:'#ffffff'
   
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 42,
    position: 'relative',
    resizeMode: 'cover',
    borderWidth:0.5,
    borderColor:'black'
  },
  imgout: {
    width: 30,
    height: 30,
    right: 0,
    position: 'absolute',
    zIndex: 98,
    top: 0,
    borderRadius: 15,
    borderWidth:0.5,
    borderColor:'black'
  },
  textmain: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
    color:'black',
    fontWeight:"500"
  },
  row: {
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
  },
});
