import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fetchBrandById } from '../services/api';

export default function BrandDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetchBrandById(id);
      setBrand(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#0f172a', '#000']} style={StyleSheet.absoluteFill} />
      <ScrollView contentContainerStyle={styles.content}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ color: '#aaa', marginBottom: 10 }}>← Back</Text>
        </Pressable>
        <Image source={{ uri: brand.logo }} style={styles.logo} />
        <Text style={styles.name}>{brand.name}</Text>
        <Text style={styles.tagline}>{brand.tagline}</Text>
        <Text style={styles.desc}>{brand.description}</Text>
        <Pressable style={styles.followBtn}>
          <Text style={styles.followText}>Follow</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, alignItems: 'center' },
  logo: { width: 100, height: 100, borderRadius: 20, marginBottom: 20 },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  tagline: { color: '#aaa', marginVertical: 8 },
  desc: { color: '#fff', lineHeight: 20, marginTop: 10 },
  followBtn: { marginTop: 20, backgroundColor: '#2563EB', padding: 12, borderRadius: 10 },
  followText: { color: 'white', fontWeight: 'bold' }
});
