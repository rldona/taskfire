package com.taskfire;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;    //import RCTSplashScreen

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "taskfire";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        RCTSplashScreen.openSplashScreen(this);   //open splashscreen
        super.onCreate(savedInstanceState);
    }

}
