function gladiatorInventory(input) {
    let inventory = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let [action, item] = input[i].split(' ');

        if (action === 'Buy' && !inventory.includes(item)) {
            inventory.push(item);

        } else if (action == 'Trash') {
            inventory = inventory.filter(equipment => equipment !== item);

        } else if (action == 'Repair') {
            let index = inventory.indexOf(item);
            if (index !== -1) {
                let repairedItem = inventory.splice(index, 1)[0];
                inventory.push(repairedItem);
            }

        } else if (action == 'Upgrade') {
            let [equipment, upgrade] = item.split('-');
            let index = inventory.indexOf(equipment);
            if (index !== -1) {
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }

        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
gladiatorInventory(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'])