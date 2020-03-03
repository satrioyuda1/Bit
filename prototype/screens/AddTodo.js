import React, { Component } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native';
import { Header, Left, Right, Body, Container, Content } from 'native-base';
//
import { connect } from 'react-redux';
import { postData } from '../_actions/data';
// textDecorationLine: 'line-through' for line center
const screenWidth = Math.round(Dimensions.get('window').width);

class Addtodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: ''
		};
	}
	handleAdd = (event) => {
		const input = {
			id: Math.ceil(Math.random() * 100000),

			title: this.state.name,
			description: this.state.description
		};
		const list = this.props.data;
		console.log(this.props.data);
		this.props.postData(input);
		const { navigation } = this.props;
		navigation.navigate('Home');
	};
	render() {
		return (
			<Container>
				<StatusBar barStyle='dark-content' hidden={false} backgroundColor='#FFF' translucent={true} />
				<Content style={{ padding: 10 }}>
					<View>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 20,
								textAlign: 'center',
								marginBottom: 20,
								marginTop: 20
							}}>
							Creat New Todo
						</Text>
					</View>
					<View>
						<Text>Name : </Text>
						<TextInput
							onChangeText={(name) => this.setState({ name: name })}
							style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
						/>
					</View>
					<View style={{ marginTop: 20 }}>
						<Text>Deskription : </Text>
						<TextInput
							onChangeText={(description) => this.setState({ description: description })}
							multiline
							numberOfLines={3}
							style={{ borderWidth: 1, borderRadius: 10, padding: 10 }}
						/>
					</View>
					<View style={{ alignSelf: 'flex-end' }}>
						<TouchableOpacity
							onPress={this.handleAdd}
							style={{
								backgroundColor: 'green',
								width: 100,
								padding: 10,
								borderRadius: 10,
								marginTop: 20
							}}>
							<Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>Save</Text>
						</TouchableOpacity>
					</View>
				</Content>
			</Container>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		data: state.data
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		postData: (data) => {
			dispatch(postData(data));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Addtodo);

// export default Addtodo;
