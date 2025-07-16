import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { getBaseUrl } from "../../utils/getBaseUrl";

/*SSG*/
export async function getStaticProps({params}) {
    // const url = "http://127.0.0.1:3000/"+ params.id +".json";
    // const req = await fetch(url);
    // const data = await req.json();

    // 環境に応じてベースURLを自動切り替え
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/${params.id}.json`;
    const req = await fetch(url);
    const data = await req.json();
    
    // ローカルファイルを直接読み込む場合（fetchを使わない方法）
    // const fs = require('fs');
    // const path = require('path');
    // const filePath = path.join(process.cwd(), 'public', `${params.id}.json`);
    // const fileContents = fs.readFileSync(filePath, 'utf8');
    // const data = JSON.parse(fileContents);

    return {
        props: {
            myprofile:data,
        }
    };
}
export async function getStaticPaths(){
    // const req = await fetch('http://127.0.0.1:3000/myprofile.json');
    // const data = await req.json();

    // 環境に応じてベースURLを自動切り替え
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}/myprofile.json`;
    const req = await fetch(url);
    const data = await req.json();
    
    // ローカルファイルを直接読み込む場合（fetchを使わない方法）
    // const fs = require('fs');
    // const path = require('path');
    // const filePath = path.join(process.cwd(), 'public', 'myprofile.json');
    // const fileContents = fs.readFileSync(filePath, 'utf8');
    // const data = JSON.parse(fileContents);

    const paths = data.map(myprofile => {
        return {
            params: {
                id: myprofile,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

const MyProfile = ( {myprofile} ) => {
    const router = useRouter();
    return <div><main  className={styles.main} >
        <h2 className={styles.title}>制作物：{myprofile.name}</h2>
        <p>{myprofile.caption_1}</p> <br/>
            <iframe width={myprofile.width_1} height={myprofile.height_1} 
                src={myprofile.src_1} title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <img src={myprofile.img_1} width={myprofile.width_2} height={myprofile.height_2}/>
            <img src={myprofile.img_2} width={myprofile.width_3} height={myprofile.height_3}/>
            <img src={myprofile.img_3} width={myprofile.width_4} height={myprofile.height_4}/>
            <img src={myprofile.img_4} width={myprofile.width_5} height={myprofile.height_5}/>
            <img src={myprofile.img_5} width={myprofile.width_6} height={myprofile.height_6}/>
            <img src={myprofile.img_6} width={myprofile.width_7} height={myprofile.height_7}/>
            <img src={myprofile.img_7} width={myprofile.width_8} height={myprofile.height_8}/>
            <img src={myprofile.img_8} width={myprofile.width_9} height={myprofile.height_9}/>
            <img src={myprofile.img_9} width={myprofile.width_10} height={myprofile.height_10}/>
            <img src={myprofile.img_10} width={myprofile.width_11} height={myprofile.height_11}/>
            <img src={myprofile.img_11} width={myprofile.width_12} height={myprofile.height_12}/>
            <img src={myprofile.img_12} width={myprofile.width_13} height={myprofile.height_13}/>
            <img src={myprofile.img_13} width={myprofile.width_14} height={myprofile.height_14}/>
        <p className={styles.footer}><Link href="/myprofile">戻る</Link></p>
    </main>
    </div>;
}
export default MyProfile;