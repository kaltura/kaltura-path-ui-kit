import * as React from 'react';
import {action} from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import {Button} from './button';
import { Plus24Icon } from '@kaltura-path/ui-icons';
import { withThemeProvider } from '../storybook/with-theme-provider';
import '../../../.storybook/styles.css';

export default {
    title: 'Action Buttons',
    component: Button,
    decorators: [
        withKnobs,
        withThemeProvider,
    ]
};

export const DefaultButton: Story = () => {
    return <div className="row">
            <div className="col">
                <span className="label" style={{'color': 'white'}}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">Disabled:</span>
                <span className="label">Active:</span>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Label</span>
                <Button isProcessing={boolean("Processing", false)} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} disabled={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} isActive={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Icon + Label</span>
                <Button isProcessing={boolean("Processing", false)} label={text("Label", "Label")} icon={<Plus24Icon/>} onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} disabled={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} isActive={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Processing</span>
                <Button label={text("Label", "Label")} isProcessing={true}
                        onClick={action('clicked')}></Button>
                <Button disabled={true} label={text("Label", "Label")} isProcessing={true}
                        onClick={action('clicked')}></Button>
                <Button label={text("Label", "Label")} isProcessing={true}
                        onClick={action('clicked')}></Button>
            </div>
        </div>
}


DefaultButton.story = {
    title: 'Default Button'
};

export const CTAButton: Story = () => {
    return <div className="row">
            <div className="col">
                <span className="label" style={{'color': 'white'}}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">Disabled:</span>
                <span className="label">Active:</span>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Label</span>
                <Button isProcessing={boolean("Processing", false)} isCTA={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} isCTA={true} disabled={true} label={text("Label", "Label")}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} isCTA={true} isActive={true} label={text("Label", "Label")}
                        onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Icon + Label</span>
                <Button isProcessing={boolean("Processing", false)} isCTA={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} isCTA={true} disabled={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} isCTA={true} isActive={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Processing</span>
                <Button isCTA={true} label={text("Label", "Label")} isProcessing={true}
                        onClick={action('clicked')}></Button>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")}
                        isProcessing={true} onClick={action('clicked')}></Button>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")}
                        isProcessing={true} onClick={action('clicked')}></Button>
            </div>
        </div>
}

CTAButton.story = {
    title: 'CTA Button'
};

export const BorderlessButton: Story = () => {
    return <div className="row">
            <div className="col">
                <span className="label" style={{'color': 'white'}}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">Disabled:</span>
                <span className="label">Active:</span>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Label</span>
                <Button isProcessing={boolean("Processing", false)} borderless={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} borderless={true} disabled={true} label={text("Label", "Label")}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} borderless={true} isActive={true} label={text("Label", "Label")}
                        onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Icon + Label</span>
                <Button isProcessing={boolean("Processing", false)} borderless={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} borderless={true} disabled={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
                <Button isProcessing={boolean("Processing", false)} borderless={true} isActive={true} label={text("Label", "Label")} icon={<Plus24Icon/>}
                        onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Processing</span>
                <Button borderless={true} label={text("Label", "Label")} isProcessing={true}
                        onClick={action('clicked')}></Button>
                <Button borderless={true} disabled={true} label={text("Label", "Label")}
                        isProcessing={true} onClick={action('clicked')}></Button>
                <Button borderless={true} isActive={true} label={text("Label", "Label")}
                        isProcessing={true} onClick={action('clicked')}></Button>
            </div>
        </div>
}

BorderlessButton.story = {
    title: 'Borderless Button'
};
