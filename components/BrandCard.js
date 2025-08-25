import React from 'react';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export default function BrandCard({ item, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && { opacity: 0.85 }]}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.tagline} numberOfLines={2}>{item.tagline}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    padding: 14,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: { width: 48, height: 48, borderRadius: 10, backgroundColor: '#111' },
  name: { color: '#fff', fontSize: 16, fontWeight: '700' },
  tagline: { color: '#aaa', fontSize: 13, marginTop: 2 },
});
