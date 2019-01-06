// import libraties to make component 
import React, {Fragment} from 'react';
import {View, Image, Text} from 'react-native';

//make component
const Header = (props) => {
    const { navStyle, menuStyle, textStyle} = styles;
    return ( 
        <Fragment>
            <View style={navStyle}>
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../../src/assets/menu-icon.png')}
                />
                <Image
                    style={{width: 45, height: 45}}
                    source={require('../../src/assets/Github.jpg')}
                />
                <Image
                    style={{width: 30, height: 30}}
                    source={require('../../src/assets/bell-icon.png')}
                />
            </View>
            <View style={menuStyle}>
                <Text style={textStyle}>OverView</Text>
                <Text style={textStyle}>Repositories</Text>
                <Text style={textStyle}>Stars</Text>
            </View>   
        </Fragment>
    );
};

const styles = {
    navStyle: {
        backgroundColor: '#24292e',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuStyle: {
        backgroundColor: '#24292e',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 18,
        color: '#FFFFFF'
    }
};
//make the component availablr to other parts of the app
export default Header;
