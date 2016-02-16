import ReactDom from 'react-dom';
import React from 'react';
import SwipeCtrl from './SwipeCtrl.jsx';


let testJSX = (<div style={{overflow:'hidden'}}>
		<SwipeCtrl maxSwipe={100} direction="LEFT">LEFT SWIPE</SwipeCtrl>
		<SwipeCtrl maxSwipe={120} direction="RIGHT">RIGHT SWIPE</SwipeCtrl>
		<SwipeCtrl maxSwipe={150} >BOTH SWIPE</SwipeCtrl>
	</div>);

ReactDom.render(testJSX,document.getElementById('app'))