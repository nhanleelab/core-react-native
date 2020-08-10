import React from "react";
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
} from "rn-placeholder";

export default function PlaceholderComponent(props: any) {
    return (
        <Placeholder
            Animation={Fade}
            style={{
                marginVertical: 6,
                marginHorizontal: 15,
                borderRadius: 4
            }}
            Left={(props: any) => (
                <PlaceholderMedia
                    style={[
                        props.style,
                        {
                            width: 60,
                            height: 100
                        }
                    ]}
                />
            )}>
            <PlaceholderLine style={{ marginTop: 10 }} width={80} />
            <PlaceholderLine style={{ marginTop: 10, height: 20 }} width={80} />
            <PlaceholderLine width={80} style={{ height: 20 }} />
        </Placeholder>
    )
}