window.sayHello2 = (dotNetHelper, name) => {

    //const arr = ['name1', 'name2'];

    const arr = { X: 20, Y: 40 };

    return arr;

    // if(name='test'){
    //     return dotNetHelper.invokeMethodAsync('GetHelloMessage', arr);
    // }
    // else{

    // return dotNetHelper.invokeMethodAsync('GetHelloMessage', arr);
    // }
  };


const pick = () => {

    return 'johan';
}


  class GreetingHelpers {
    static dotNetHelper;

    static setDotNetHelper(value) {
        console.log('value: ' + JSON.stringify(value));
      GreetingHelpers.dotNetHelper = value;
    }

    static async sayHello() {
      const msg = 
        await GreetingHelpers.dotNetHelper.invokeMethodAsync('GetHelloMessage');
      alert(`Message from .NET: "${msg}"`);
    }

    static async welcomeVisitor() {
      const msg = 
        await GreetingHelpers.dotNetHelper.invokeMethodAsync('GetWelcomeMessage');
      alert(`Message from .NET: "${msg}"`);
    }
  }

  window.GreetingHelpers = GreetingHelpers;



  //Generic type

  const randomInt = () => Math.floor(Math.random() * 99999);

  window.invokeMethodsAsync = async (syncInterop, dotNetHelper1, dotNetHelper2) => {
    var n = randomInt();
    console.log(`JS: invokeMethodAsync:Update('string ${n}')`);
    await dotNetHelper1.invokeMethodAsync('Update', `string ${n}`);

    n = randomInt();
    console.log(`JS: invokeMethodAsync:UpdateAsync('string ${n}')`);
    await dotNetHelper1.invokeMethodAsync('UpdateAsync', `string ${n}`);

    //Om applikationen körs med Blazor Server är syncInterop "false"
    if (syncInterop) {
      n = randomInt();
      console.log(`JS: invokeMethod:Update('string ${n}')`);
      dotNetHelper1.invokeMethod('Update', `string ${n}`);
    }

    n = randomInt();
    console.log(`JS: invokeMethodAsync:Update(${n})`);
    await dotNetHelper2.invokeMethodAsync('Update', n);

    n = randomInt();
    console.log(`JS: invokeMethodAsync:UpdateAsync(${n})`);
    await dotNetHelper2.invokeMethodAsync('UpdateAsync', n);

    if (syncInterop) {
      n = randomInt();
      console.log(`JS: invokeMethod:Update(${n})`);
      dotNetHelper2.invokeMethod('Update', n);
    }
  };