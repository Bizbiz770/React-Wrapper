package com.barak.react;

import android.content.Context;
import android.content.Intent;

/**
 * Created by Barak Halevi on 31/01/2021.
 */

class BarakLib {
    public static void openReact(Context context){
        Intent myIntent = new Intent(context, MainActivity.class);
        context.startActivity(myIntent);
    }
}
