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
      <ul className= {styles.list}>
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
      </ul>
    </>
  )
}