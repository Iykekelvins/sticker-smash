import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
	imgSource: ImageSourcePropType;
	selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
	const source = selectedImage ? { uri: selectedImage } : imgSource;
	return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});
