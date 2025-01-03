import { View, Text, StyleSheet } from 'react-native';

const About = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>About</Text>
		</View>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#25292e',
	},
	text: {
		color: '#fff',
	},
});
