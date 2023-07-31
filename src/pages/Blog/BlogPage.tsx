/* eslint-disable max-len */
import { FC, useEffect, useState } from 'react'
import cls from './BlogPage.module.scss'
import { classNames } from '../../components/classNames/classNames';
import { AppLink, AppLinkTheme } from '../../components/AppLink/AppLink';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as Arrow } from '../../assets/arrow-down.svg';
import axios from 'axios';

interface BlogPageProps {
    className?: string;
}

export const BlogPage: FC<BlogPageProps> = ({ className }) => {
    const [Posts, setPosts] = useState<any>(null);
    useEffect(() => {
        const apiUrl = 'https://64c4fef4c853c26efada5de6.mockapi.io/api/v1/fixedPost';
        axios.get(apiUrl).then((resp) => {
            const allPosts = resp.data;
            setPosts(allPosts[0]);
        });
    }, []);
    return (
        <div id='start' className={classNames("page-wrapper", {}, [className])}>
            <div className={cls.BlogPage}>

                <div className={cls.HeroContent}>
                    <h1 className={cls.Header}>Blog</h1>
                    {
                        Posts !== null ?
                            <div className={cls.ContentText}>
                                <AppLink target="_blank" to={Posts?.fixedPost?.url}>
                                    <p>{Posts?.fixedPost?.date}</p>
                                    <h2>{Posts?.fixedPost?.text}</h2>
                                </AppLink>
                                <AppLink target="_blank" theme={AppLinkTheme.PRIMARY} to={Posts?.fixedPost?.url} ><div className={cls.Read}>Read more <Arrow /> </div>
                                </AppLink>
                            </div> : null

                    }
                </div>
                {Posts !== null ? <LazyLoadImage className={cls.HeroImg} src={Posts.fixedPost.image} />: null}
                <div className={cls.Posts}>
                    {Posts !== null ? Posts.posts.map((p) => {
                        return (<AppLink target="_blank" className={cls.Post} key={p.id} to={p.url}>
                            <LazyLoadImage className={cls.PostImage} src={p.image} />
                            <h2>{p.text}</h2>
                            <p>{p.date}</p>
                        </AppLink>)
                    }) : null}
                </div>
            </div>

        </div>
    )
}