import * as React from 'react';
import { View, Text } from 'react-native';

export default function CartScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                // onPress={() => navigation.navigate('Cart')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Cart Screen</Text>
        </View>
    );
}