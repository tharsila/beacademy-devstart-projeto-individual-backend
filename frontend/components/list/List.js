import styles from './List.module.scss'
import Image from 'next/image'
import Button from '../Button'
import {TextService} from '../../data/services/TextService'

const pets = [
  {
    id: 1,
    name: 'Yoshi',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolorum id repudiandae iste assumenda vel blanditiis? Qui sapiente eius blanditiis ducimus sunt magni voluptatem totam, labore nam assumenda veniam debitis?',
    image: 'https://www.petz.com.br/blog/wp-content/uploads/2019/04/quantos-anos-vive-um-gato.jpg'
  },
  {
    id: 2,
    name: 'Yoshi',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolorum id repudiandae iste assumenda vel blanditiis? Qui sapiente eius blanditiis ducimus sunt magni voluptatem totam, labore nam assumenda veniam debitis?',
    image: 'https://www.petz.com.br/blog/wp-content/uploads/2019/04/quantos-anos-vive-um-gato.jpg'
  }
]

export default function List() {
  const maxLengthText = 400;
  return (
    <>
      {/* <ul className= {styles.list}>
        {pets.map((pet) => (
          <li key={pet.id} className= {styles.list_item}>
            <Image src={pet.image} width="200px" height="250px" className={styles.list_img}/>
            <div className={styles.list_info}>
              <h3>{pet.name}</h3>
              <p>{TextService.limitText(pet.description, maxLengthText)}</p>
              <Button text="Ajudar"/>
            </div>
          </li>
        ))}
      </ul> */}
      <div className={styles.container}>
      <ul className={styles.card_container}>
        <li className={styles.card_content}>
          <Image className={styles.card_image} src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg" width="350px" height="250px" />
          <div className={styles.second_part}>
            <div className={styles.btn}>
              <div className={styles.btn_text}>
                <span>Gatuni</span>
                <span>(Belém)</span>
              </div>
            </div>
            <div className={styles.info_container}>
              <div className={styles.content_one}>
                <div className={styles.info_content}>
                  <span>Idade</span>
                  <strong>2 anos</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Sexo</span>
                  <strong>Macho</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Peso</span>
                  <strong>6kg</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Raça</span>
                  <strong>SRD</strong>
                </div>
              </div>

              <div className={styles.content_two}>
                <div className={styles.info_content}>
                  <span>No abrigo desde:</span>
                  <strong>25/05/2022</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Porte</span>
                  <strong>Médio</strong>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <h4>Sobre</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa harum expedita autem, perferendis excepturi quia dolores rerum? Eligendi amet libero nesciunt officia delectus atque quo dolor commodi dolore aperiam.</p>
            </div>
          </div>

          <div className={styles.btn_confirmed}>
              <a href="">Ajudar agora!</a>
          </div>
        </li>

        <li className={styles.card_content}>
          <Image className={styles.card_image} src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg" width="350px" height="250px" />
          <div className={styles.second_part}>
            <div className={styles.btn}>
              <div className={styles.btn_text}>
                <span>Gatuni</span>
                <span>(Belém)</span>
              </div>
            </div>
            <div className={styles.info_container}>
              <div className={styles.content_one}>
                <div className={styles.info_content}>
                  <span>Idade</span>
                  <strong>2 anos</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Sexo</span>
                  <strong>Macho</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Peso</span>
                  <strong>6kg</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Raça</span>
                  <strong>SRD</strong>
                </div>
              </div>

              <div className={styles.content_two}>
                <div className={styles.info_content}>
                  <span>No abrigo desde:</span>
                  <strong>25/05/2022</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Porte</span>
                  <strong>Médio</strong>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <h4>Sobre</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa harum expedita autem, perferendis excepturi quia dolores rerum? Eligendi amet libero nesciunt officia delectus atque quo dolor commodi dolore aperiam.</p>
            </div>
          </div>

          <div className={styles.btn_confirmed}>
              <a href="">Ajudar agora!</a>
          </div>
        </li>

        <li className={styles.card_content}>
          <Image className={styles.card_image} src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg" width="350px" height="250px" />
          <div className={styles.second_part}>
            <div className={styles.btn}>
              <div className={styles.btn_text}>
                <span>Gatuni</span>
                <span>(Belém)</span>
              </div>
            </div>
            <div className={styles.info_container}>
              <div className={styles.content_one}>
                <div className={styles.info_content}>
                  <span>Idade</span>
                  <strong>2 anos</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Sexo</span>
                  <strong>Macho</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Peso</span>
                  <strong>6kg</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Raça</span>
                  <strong>SRD</strong>
                </div>
              </div>

              <div className={styles.content_two}>
                <div className={styles.info_content}>
                  <span>No abrigo desde:</span>
                  <strong>25/05/2022</strong>
                </div>
                <div className={styles.info_content}>
                  <span>Porte</span>
                  <strong>Médio</strong>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <h4>Sobre</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus culpa harum expedita autem, perferendis excepturi quia dolores rerum? Eligendi amet libero nesciunt officia delectus atque quo dolor commodi dolore aperiam.</p>
            </div>
          </div>

          <div className={styles.btn_confirmed}>
              <a href="">Ajudar agora!</a>
          </div>
        </li>
      </ul>
    </div>


    </>
  )
}