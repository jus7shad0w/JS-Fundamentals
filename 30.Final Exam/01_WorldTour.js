function worldTour(input) {
    let stops = input.shift();
  
    for (let command of input) {
      if (command === "Travel") {
        console.log(`Ready for world tour! Planned stops: ${stops}`);
        break;
      }
  
      let [action, arg1, arg2] = command.split(':');
  
      switch (action) {
        case 'Add Stop':
          let indexAdd = Number(arg1);
          let stringAdd = arg2;
          if (indexAdd >= 0 && indexAdd <= stops.length) {
            stops = stops.slice(0, indexAdd) + stringAdd + stops.slice(indexAdd);
          }
          break;
  
        case 'Remove Stop':
          let startRemove = Number(arg1);
          let endRemove = Number(arg2);
          if (startRemove >= 0 && endRemove < stops.length && startRemove <= endRemove) {
            stops = stops.slice(0, startRemove) + stops.slice(endRemove + 1);
          }
          break;
  
        case 'Switch':
          let oldString = arg1;
          let newString = arg2;
          stops = stops.split(oldString).join(newString);
          break;
      }
  
      console.log(stops);
    }
  }
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])