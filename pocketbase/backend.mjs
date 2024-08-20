import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')


//la liste de tout  les projets de la collection Decors par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allDecorsSort() {
    const decors = await pb.collection('Decors').getFullList(
        {sort: 'created'});
    return decors;
}

//la liste de tout  les projets de la collection Travaux_2D par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allTravaux_2DSort() {
    const travaux_2D = await pb.collection('Travaux_2D').getFullList(
        {sort: 'created'});
    return travaux_2D;
}

//la liste de tous les projets de la collection Emotes
export async function allEmotes() {
    const emotes = await pb.collection('Emotes').getFullList();
    return emotes;
}  

//la liste de tous les projets de la collection Scene_3D par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allScene_3DSort() {
    const scene_3D = await pb.collection('Scene_3D').getFullList(
        {sort: 'created'});
    return scene_3D;
}

//la liste de tous les projets des collections Design et Chara_Design trié par ordre croissant de leur date de création
export async function allDesignSort() {
    const design = await pb.collection('Design').getFullList(
        {sort: 'created'});
    const chara_design = await pb.collection('Chara_Design').getFullList(
        {sort: 'created'});
    return design.concat(chara_design);
} 

//les infos d'n projet de la collection Design en donnant l'id en paramètre
export async function getDesignByID(id) {
    const design = await pb.collection('Design').getOne(id);
    return design;
}

//les infos d'n projet de la collection Chara_Design en donnant l'id en paramètre
export async function getCharaDesignByID(id) {
    const chara_design = await pb.collection('Chara_Design').getOne(id);
    return chara_design;
}

//la liste de tous les projets de la collection Vtuber par ordre croissant de leur date de cr´eation dans la base de donn´ees
export async function allVtuberSort() {
    const vtuber = await pb.collection('Vtuber').getFullList(
        {sort: 'created'});
    return vtuber;
}

//les infos d'n projet de la collection Vtuber en donnant l'id en paramètre
export async function getVtuberByID(id) {
    const vtuber = await pb.collection('Vtuber').getOne(id);
    return vtuber;
}

//les 3 projets les plus récents parmis les collections Design, Chara_Design et Vtuber
export async function get3RecentProjects() {
    const design = await pb.collection('Design').getFullList(
        {sort: 'created', limit: 3});
    const chara_design = await pb.collection('Chara_Design').getFullList(
        {sort: 'created', limit: 3});
    const vtuber = await pb.collection('Vtuber').getFullList(
        {sort: 'created', limit: 3});
    return design.concat(chara_design, vtuber);
}