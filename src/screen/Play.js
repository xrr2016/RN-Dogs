import React, { Component } from 'react'
import { StyleSheet, WebView } from 'react-native'
import { Container, Header, Text, Toast, Fab, Spinner } from 'native-base'

const styles = {
	web: {
		flex: 1
	}
}

export default class Play extends Component {
	handleLoadStart = () => {}
	handleLoadError = () => {
		Toast.show({
			text: '加载失败了...',
			buttonText: '返回',
			position: 'top',
			type: 'danger',
			duration: 1500
		})
	}

	render() {
		const { params } = this.props.navigation.state
		const uri = `https://www.bilibili.com/video/av${params.aid}`
		return (
			<Container>
				<WebView
					onError={this.handleLoadError}
					renderLoading={() => <Spinner />}
					style={styles.web}
					scalesPageToFit={true}
					mediaPlaybackRequiresUserAction={false}
					allowsInlineMediaPlayback={true}
					source={{ uri }}
				/>
			</Container>
		)
	}
}
