import {allDreamUser} from './backend.mjs';
import {getUserByID} from './backend.mjs';
import {allDreamByUserName} from './backend.mjs';
import {allDreamConnectedUser} from './backend.mjs';
import {allDreamUserSort} from './backend.mjs';
import {createDream} from './backend.mjs';
import {createUser} from './backend.mjs';
import {deleteDream} from './backend.mjs';
import {updateUser} from './backend.mjs';
import {updateDream} from './backend.mjs';
import {truncateDescription} from './backend.mjs';
/*
try {
   const fulllist = await allDreamUser();
    console.log(JSON.stringify(fulllist, null, 2)) ;
} catch (e) { 
    console.error(e); 
}

try {
    const userbyid = await getUserByID('ap8bvt096wbrtu5'); 
    console.table(userbyid) ;
} catch (e) {
console.error(e) ;
}

try { 
    const fulllistsorted = await allDreamUserSort();
    console.log(JSON.stringify(fulllistsorted, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const dream = {
        "Titre": "Mon reve2",
        "Description": "Je refriurygètrhyyuhrtughtrve de devenir un grand developpeur Bonjour @everyone ! On commence la semaine avec une séance de rêve en ligne.grtirguhuithrgiuhtriughtrughrutghruighurhgturhgrhgghir",
        "online": true,
        "users": "ap8bvt096wbrtu5",
        "Type_reve": "Cauchemar",
        "Longeur_reve": "4",
        "Note_reve": "5",
        "Date": new Date().toISOString()
    }
    dream.Extrait_de_description = truncateDescription(dream.Description, 100);
    const dreamCreated = await createDream(dream);
    console.log(JSON.stringify(dreamCreated, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const user = {
        "username": `user_${crypto.randomUUID().split("-")[0]}`,
        "name": "users3",
        "email": "emaittrgll@gmail.com",
        "emailVisibility": true,
        "password": "password",
        "passwordConfirm": "password",
        "Abonnement": "free"
    }
    const userCreated = await createUser(user);
    console.log(JSON.stringify(userCreated, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const dreamDeleted = await deleteDream('gdsaqxsjt9doylx');
    console.log(JSON.stringify(dreamDeleted, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const user = {
        "name": "users55545345",
        "Abonnement": "premium"
}
    const userUpdated = await updateUser ('4sdjmzwiotvw9s7', user); 
    console.log(JSON.stringify(userUpdated, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const dream = {
        "Titre": "Mon reve3",
        "Description": "une fonction permettant de remonter les donn ees d’un user en passant nter les donn ees d’un user en passant nter les donn ees d’un user en passant nter les donn ees d’un user en passant son id en parametre",
        "online": true,
        "Type_reve": "Cauchemar",
        "Longeur_reve": "4",
        "Note_reve": "5",
        "Date": new Date().toISOString()
    }
    dream.Extrait_de_description = truncateDescription(dream.Description, 100);
    const dreamCreated = await updateDream('pzrksqr7gyrclzg',dream);
    console.log(JSON.stringify(dreamCreated, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const dreamUsername = await allDreamByUserName("user_aca6aefb");
    console.log(JSON.stringify(dreamUsername, null, 2));
} catch (e) {
    console.error(e);

}
*/
try {
    const dreamConnectedUser = await allDreamConnectedUser('ap8bvt096wbrtu5');
    console.log(JSON.stringify(dreamConnectedUser, null, 2));
} catch (e) {
    console.error(e);
}
