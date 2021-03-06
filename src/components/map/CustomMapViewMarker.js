import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MapView,} from 'expo';
import PropTypes from 'prop-types';

const CustomMapViewMarker = ({line, coordinates}) => (
    <MapView.Marker
        coordinate={coordinates}
        title={line}
        description={"Buss line"}
    >
        <View style={styles.circle}>
            <Text style={styles.pinText}>
                {line}
            </Text>
        </View>
    </MapView.Marker>
);

CustomMapViewMarker.propTypes = {
    line: PropTypes.string.isRequired,
    coordinates: PropTypes.object.isRequired,
};

export default CustomMapViewMarker;

const styles = StyleSheet.create({
    circle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: '#212b63',
    },
    pinText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
});
