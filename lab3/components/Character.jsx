import React, {useRef, useState} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import {
    Directions,
    FlingGestureHandler,
    LongPressGestureHandler,
    PanGestureHandler,
    PinchGestureHandler,
    State,
    TapGestureHandler,
} from 'react-native-gesture-handler';
import FictLogo from '../assets/fict-logo.png';

const Character = ({
                       onTap,
                       onDoubleTap,
                       onLongPress,
                       onPan,
                       onFlingLeft,
                       onFlingRight,
                       onPinch,
                   }) => {
    const scale = useRef(new Animated.Value(1)).current;
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const baseScale = useRef(new Animated.Value(1)).current;
    const pinchScale = useRef(new Animated.Value(1)).current;
    const lastScale = useRef(1);
    const lastOffset = useRef({x: 0, y: 0});
    const [bgColor, setBgColor] = useState('transparent');

    const doubleTapRef = useRef();
    const singleTapRef = useRef();
    const longPressRef = useRef();

    const animate = (config, callback) => {
        setBgColor(config.bgColor);
        Animated.sequence([
            Animated.timing(config.target, {
                toValue: config.toValue,
                duration: config.duration,
                useNativeDriver: true,
            }),
            Animated.timing(config.target, {
                toValue: config.resetValue,
                duration: config.duration,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setBgColor('transparent');
            callback();
        });
    };

    const gestureConfigs = {
        singleTap: {
            bgColor: '#2ecc71',
            target: scale,
            toValue: 0.9,
            resetValue: 1,
            duration: 100,
            callback: onTap,
        },
        doubleTap: {
            bgColor: '#e74c3c',
            target: scale,
            toValue: 1.2,
            resetValue: 1,
            duration: 150,
            callback: onDoubleTap,
        },
        longPress: {
            bgColor: '#f39c12',
            target: scale,
            toValue: 1.3,
            resetValue: 1,
            duration: 300,
            callback: onLongPress,
        },
        flingLeft: {
            bgColor: '#9b59b6',
            target: translateX,
            toValue: -50,
            resetValue: 0,
            duration: 200,
            callback: onFlingLeft,
        },
        flingRight: {
            bgColor: '#1abc9c',
            target: translateX,
            toValue: 50,
            resetValue: 0,
            duration: 200,
            callback: onFlingRight,
        },
    };

    const handleGesture = (event, type) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            animate(gestureConfigs[type], gestureConfigs[type].callback);
        }
    };

    const onPanEvent = Animated.event(
        [{nativeEvent: {translationX: translateX, translationY: translateY}}],
        {useNativeDriver: true}
    );

    const onPanStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            lastOffset.current = {
                x: lastOffset.current.x + event.nativeEvent.translationX,
                y: lastOffset.current.y + event.nativeEvent.translationY,
            };
            translateX.setOffset(lastOffset.current.x);
            translateY.setOffset(lastOffset.current.y);
            translateX.setValue(0);
            translateY.setValue(0);
            onPan();
        }
    };

    const onPinchEvent = Animated.event(
        [{nativeEvent: {scale: pinchScale}}],
        {useNativeDriver: true}
    );

    const onPinchStateChange = (event) => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            lastScale.current *= event.nativeEvent.scale;
            baseScale.setValue(lastScale.current);
            pinchScale.setValue(1);
            onPinch();
        }
    };

    const combinedScale = Animated.multiply(
        Animated.multiply(baseScale, pinchScale),
        scale
    );

    const simultaneousHandlers = [singleTapRef, doubleTapRef, longPressRef];

    return (
        <View style={styles.container}>
            <PanGestureHandler
                onGestureEvent={onPanEvent}
                onHandlerStateChange={onPanStateChange}
                simultaneousHandlers={simultaneousHandlers}
            >
                <Animated.View>
                    <PinchGestureHandler
                        onGestureEvent={onPinchEvent}
                        onHandlerStateChange={onPinchStateChange}
                        simultaneousHandlers={simultaneousHandlers}
                    >
                        <Animated.View>
                            <FlingGestureHandler
                                direction={Directions.LEFT}
                                onHandlerStateChange={(e) => handleGesture(e, 'flingLeft')}
                                simultaneousHandlers={simultaneousHandlers}
                            >
                                <Animated.View>
                                    <FlingGestureHandler
                                        direction={Directions.RIGHT}
                                        onHandlerStateChange={(e) => handleGesture(e, 'flingRight')}
                                        simultaneousHandlers={simultaneousHandlers}
                                    >
                                        <Animated.View>
                                            <LongPressGestureHandler
                                                ref={longPressRef}
                                                minDurationMs={800}
                                                onHandlerStateChange={(e) => handleGesture(e, 'longPress')}
                                                simultaneousHandlers={[singleTapRef, doubleTapRef]}
                                            >
                                                <Animated.View>
                                                    <TapGestureHandler
                                                        ref={doubleTapRef}
                                                        numberOfTaps={2}
                                                        onActivated={(e) => handleGesture(e, 'doubleTap')}
                                                    >
                                                        <Animated.View>
                                                            <TapGestureHandler
                                                                ref={singleTapRef}
                                                                numberOfTaps={1}
                                                                maxDelayMs={250}
                                                                waitFor={doubleTapRef}
                                                                onActivated={(e) => handleGesture(e, 'singleTap')}
                                                            >
                                                                <Animated.View
                                                                    style={[
                                                                        styles.character,
                                                                        {
                                                                            backgroundColor: bgColor,
                                                                            transform: [
                                                                                {translateX},
                                                                                {translateY},
                                                                                {scale: combinedScale},
                                                                            ],
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Image
                                                                        source={FictLogo}
                                                                        style={styles.image}
                                                                        resizeMode="contain"
                                                                    />
                                                                </Animated.View>
                                                            </TapGestureHandler>
                                                        </Animated.View>
                                                    </TapGestureHandler>
                                                </Animated.View>
                                            </LongPressGestureHandler>
                                        </Animated.View>
                                    </FlingGestureHandler>
                                </Animated.View>
                            </FlingGestureHandler>
                        </Animated.View>
                    </PinchGestureHandler>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    character: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Character;