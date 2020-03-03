import React, { Component } from 'react';
import {
	View,
	Text,
	StatusBar,
	FlatList,
	TouchableOpacity,
	Dimensions,
	StyleSheet,
	Modal,
	TextInput,
	TouchableHighlight
} from 'react-native';
import { Header, Left, Right, Body, Container, Content, Fab, Button } from 'native-base';
//
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { deleteData, updateDone } from '../_actions/data';
// textDecorationLine: 'line-through' for line center
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Home extends Component {
	handleDone = (id) => {
		this.props.updateDone(id);
		const { navigation } = this.props;
		navigation.navigate('Home');
	};
	render() {
		const { data } = this.props.data;
		console.log(data);
		return (
			<Container>
				<StatusBar barStyle='dark-content' hidden={false} backgroundColor='#FFF' translucent={true} />
				<View>
					<FlatList
						contentContainerStyle={{ alignSelf: 'center' }}
						data={data}
						renderItem={({ item }) => (
							<View style={styles.card}>
								<View>
									<Text
										style={{
											fontSize: 20,
											fontWeight: 'bold',
											textDecorationLine: item.completed ? 'line-through' : ''
										}}>
										{item.taskName}
									</Text>
									<Text style={{ textDecorationLine: item.completed ? 'line-through' : '' }}>
										{item.description}
									</Text>
								</View>
								<View
									style={{
										display: 'flex',
										flexDirection: 'row',
										justifyContent: 'space-between',
										width: 110,
										height: 10
									}}>
									<Button
										style={{ width: 50, backgroundColor: 'red' }}
										title='Delete'
										onPress={() => this.props.deleteData(item.id)}>
										<Text style={{ padding: 5, color: 'white' }}>Delete</Text>
									</Button>
									<Button
										style={{ backgroundColor: item.completed ? 'red' : 'blue' }}
										title='cancel'
										onPress={() => this.handleDone(item.id)}>
										<Text style={{ padding: 5, color: 'white' }}>
											{item.completed ? 'Cancel' : 'DONE'}
										</Text>
									</Button>
								</View>
							</View>
						)}
						keyExtractor={(item) => item.id}
					/>
				</View>
				<View style={{ flex: 1 }}>
					<Fab
						onPress={() => this.props.navigation.navigate('Addtodo')}
						direction='up'
						style={{ backgroundColor: 'red' }}
						position='bottomRight'>
						<Text>+</Text>
					</Fab>
				</View>
				{/* --------------------------------------------------------------------modal */}
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteData: (id) => {
			dispatch(deleteData(id));
		},
		updateDone: (id) => {
			dispatch(updateDone(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
	card: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		width: screenWidth - 20,
		height: 100,
		marginTop: 10,
		padding: 10,
		shadowColor: '#fff',
		shadowOffset: {
			width: 0,
			height: 5
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 4,
		backgroundColor: '#fff',
		width: screenWidth - 20,
		borderRadius: 10,
		overflow: 'hidden',
		margin: 5
	},
	text: {
		fontSize: 30,
		color: 'white'
	}
});
