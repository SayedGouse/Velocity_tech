import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import { catogery } from '../src/data.js';

const Header = ({ setSelectedCategory, searchInput, onSearchChange }) => {
  const [data, setData] = useState(catogery);
  const [activeCategory, setActiveCategory] = useState("Astrologer"); 

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedCategory(item.name);
        setActiveCategory(item.name); 
      }}
      style={[styles.box, {
        borderColor: activeCategory === item.name ? 'blue' : 'gray', 
      }]}
    >
      <Image style={[styles.img,{
        borderColor: activeCategory === item.name ? 'blue' : 'gray', 
      }]} source={item.pic} />
      <Text style={styles.textmain}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.containermain}>
      <View style={styles.container}>
        <Ionicons
          style={styles.left}
          name="reorder-three"
          size={28}
          color="black"
        />
        <Ionicons
          style={styles.right}
          name="notifications-outline"
          size={28}
          color="black"
        />
      </View>

      <View style={styles.mainheader}>
        <FlatList
          data={data}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.maininput}>
        <View style={styles.boxtwo}>
          <View>
            <Feather style={styles.search} name='search' color='black'  size={20} />
          </View>
          <TextInput
            placeholder='Search'
            placeholderTextColor="black" 
            style={styles.input} 
            value={searchInput}
            onChangeText={onSearchChange}
          />
          <FontAwesome6 style={styles.mic} name='microphone-lines' color='black' size={20} />
        </View>

        <View style={styles.boxone}>
          <FontAwesome6 name='bars-progress' color='black' size={20} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  containermain: {
    width: '100%',
    backgroundColor:'#ffffff'
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    padding: 10,
  },
  right: {
    padding: 10,
  },
  mainheader: {
    backgroundColor: '#EEEEEE',
    height:100,
    
    flexDirection: 'row',
    paddingLeft:5,
    paddingRight:5
  },
  search: {
    position: 'absolute',
    zIndex: 99,
    top: 10,
    left: 5,
  },
  box: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    margin: 2,
    // padding: 5,
    borderRadius: 22,
    // backgroundColor:'#ffffff'
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    
  },
  textmain: {
    fontSize: 10,
    color:'black',
    fontWeight:'500'
  },
  maininput: {
    flexDirection: 'row',
    padding: 5,
  },
  boxtwo: {
    width: '87%',
    position: 'relative',
  },
  input: {
    height: 40,
    backgroundColor: '#EEEEEE',
    color: 'black',
    borderRadius: 10,
    paddingLeft: 30,
    paddingRight: 25,
  },
  boxone: {
    width: '11%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    marginLeft: 5,
  },
  
  mic: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
