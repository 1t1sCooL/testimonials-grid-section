import avatarDaniel from '../../assets/images/image-daniel.jpg'
import avatarJonathan from '../../assets/images/image-jonathan.jpg'
import avatarJeanette from '../../assets/images/image-jeanette.jpg'
import avatarPatrick from '../../assets/images/image-patrick.jpg'
import avatarKira from '../../assets/images/image-kira.jpg'

export type TestimonialTheme = 'purple' | 'grey' | 'white' | 'dark'

export interface Testimonial {
    id: string
    name: string
    role: string
    avatar: string
    headline: string
    quote: string
    theme: TestimonialTheme
    /** Показывать фоновый паттерн кавычек (только у первой карточки) */
    pattern?: boolean
    /** grid-area в раскладке сетки */
    area: string
}

export const testimonials: Testimonial[] = [
    {
        id: 'daniel',
        name: 'Daniel Clifford',
        role: 'Verified Graduate',
        avatar: avatarDaniel,
        headline:
            'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
        quote:
            'I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.',
        theme: 'purple',
        pattern: true,
        area: 'daniel',
    },
    {
        id: 'jonathan',
        name: 'Jonathan Walters',
        role: 'Verified Graduate',
        avatar: avatarJonathan,
        headline: 'The team was very supportive and kept me motivated',
        quote:
            'I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.',
        theme: 'grey',
        area: 'jonathan',
    },
    {
        id: 'jeanette',
        name: 'Jeanette Harmon',
        role: 'Verified Graduate',
        avatar: avatarJeanette,
        headline: 'An overall wonderful and rewarding experience',
        quote:
            'Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.',
        theme: 'white',
        area: 'jeanette',
    },
    {
        id: 'patrick',
        name: 'Patrick Abrams',
        role: 'Verified Graduate',
        avatar: avatarPatrick,
        headline:
            'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
        quote:
            'The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.',
        theme: 'dark',
        area: 'patrick',
    },
    {
        id: 'kira',
        name: 'Kira Whittle',
        role: 'Verified Graduate',
        avatar: avatarKira,
        headline: 'Such a life-changing experience. Highly recommended!',
        quote:
            'Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!',
        theme: 'white',
        area: 'kira',
    },
]
