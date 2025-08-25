import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl, StyleSheet, SafeAreaView } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import BrandCard from '../components/BrandCard';
import { fetchBrands } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const loadBrands = async () => {
    try {
      setError('');
      const data = await fetchBrands();
      setBrands(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => { loadBrands(); }, []);
  const onRefresh = () => { setRefreshing(true); loadBrands(); };

  return (
    <SafeAreaView style={styles.container}>
      <GradientBackground />
      <Text style={styles.header}>Top Brands Today</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 50 }} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={brands}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <BrandCard
              item={item}
              onPress={() => navigation.navigate('BrandDetail', { id: item.id })}
            />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { fontSize: 24, color: '#fff', fontWeight: 'bold', margin: 16 },
  error: { color: 'red', textAlign: 'center', marginTop: 20 },
});
