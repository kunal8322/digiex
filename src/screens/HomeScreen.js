import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';
import Animated, { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.product);
  const { username } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeIn} exiting={FadeOut}>
        <Text style={styles.greeting}>Hi, {username}</Text>
      </Animated.View>

      <Animated.View entering={SlideInDown}>
        <TextInput style={styles.search} placeholder="Search products..." />
      </Animated.View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  greeting: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  search: { borderColor: '#ccc', borderWidth: 1, padding: 10, borderRadius: 8 },
  card: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
});
