import styles from './App.module.css';
import '@fontsource-variable/montserrat';
import {
    HiOutlineCamera,
    HiOutlineUserGroup,
    HiOutlineAcademicCap,
} from 'react-icons/hi';
import { LuTruck } from 'react-icons/lu';
import Layout from './components/layout/layout';
import VacancyCard from './components/cards/vacancyCard/vacancyCard';
import SortCard from './components/cards/sortMainCard/sortCard';

const categories: { icon: React.ReactNode; name: string }[] = [
    { icon: <HiOutlineCamera />, name: 'Фото/видеосъемка' },
    { icon: <HiOutlineUserGroup />, name: 'Мероприятия' },
    { icon: <HiOutlineAcademicCap />, name: 'Помощь с ДЗ' },
    { icon: <LuTruck />, name: 'Тех. бригада' },
];

function App() {
    return (
        <div className={styles.container}>
            <Layout />

            <div className={styles.intro}>
                <div className={styles.introMain}>
                    <h2>Ищите подработку</h2>
                    <div className={styles.introText}>
                        какой-то супер важный мотивирующий текст, чтоб ты делал
                        что-то полезное
                    </div>

                    <div className={styles.search}>
                        <input
                            type="search"
                            placeholder="Поиск по ключевым словам"
                        />
                        <button>Найти</button>
                    </div>
                    <div className={styles.exampleSearchText}>
                        Например: <span>что-то там</span>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.mainCategories}>
                    <div className={styles.title}>Категории</div>
                    <div className={styles.categories}>
                        {categories.map((category, index) => (
                            <div key={index} className={styles.category}>
                                {category.icon}
                                <span>{category.name}</span>
                            </div>
                        ))}
                        {categories.map((category, index) => (
                            <div key={index} className={styles.category}>
                                {category.icon}
                                <span>{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.recommendationsSorting}>
                    <div className={styles.recommendations}>
                        <div className={styles.title}>Рекомендации</div>
                        <VacancyCard />
                        <VacancyCard />
                        <VacancyCard />
                    </div>
                    <div className={styles.sorting}>
                        <SortCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
