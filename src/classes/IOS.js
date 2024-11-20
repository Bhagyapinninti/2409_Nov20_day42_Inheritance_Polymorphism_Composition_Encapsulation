import Android from "./Android";

class IOS extends Android{
    constructor(){
        super();

        this.Brand="Apple";
        this.ModelName="iPhone 16 Pro Max";
        this.storage="256GB";
        this.color="Natural Titanium";
    }
    OperatingSystem=()=>{
        console.log(`iOS is a closed  and controlled system.`)
        }
        Application=()=>{
            console.log(`iOS applications are available in Apple App store.`)
        }
        Battery=()=>{
            console.log(`iOS devices have longer battery life and battery cannot replaced by the user. `)
        }
}

export default IOS;