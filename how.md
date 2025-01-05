# **From Self-Taught Developer to AI Innovator: How I Built VoxBird**

I've been obsessed with code since writing my first line in 1997. While others pursued traditional CS degrees, I chose a different path — diving deep into open source, building countless projects, and learning through pure experimentation.

This self-taught journey took me through roles as a developer and software engineer across healthcare, mining, scientific research, and enterprise sales. And each industry taught me different approaches to problem-solving, from optimizing mining operations to scaling healthcare systems.


---

## **The Foundations**

Having spent years as a developer, I found my entry point to machine learning through an unexpected source — classic games from my childhood.

I started building AI models that could master games like Connect 4, Pac-Man, and Zelda, pushing them to play at or beyond human levels. These familiar games provided perfect test cases for understanding how machines could learn and make decisions.

While I could build working models, I knew I needed deeper mathematical understanding. Visual resources like [3Blue1Brown](https://www.3blue1brown.com/) became my go-to, transforming abstract math concepts into intuitive understanding through animation and clear explanation.

I dove into genetic algorithms and competed in AI contests on [CodinGame](https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard), even placing 6th in one competition. This hands-on approach meant learning math concepts like slopes and derivatives only when I needed them — never writing long formal proofs, just practical application.

This combination — practical coding experience, game-based experimentation, and learning math through necessity — gave me the foundation to tackle more ambitious AI projects.

---

## **The Problem I Wanted to Solve**

While my career has centered on software engineering, my passion for music has always drawn me into audio production. Through various projects over the years, from music engineering to YouTube content, I've experienced firsthand the frustrations of voice recording.

Finding a perfectly quiet room is just the start. There are constant interruptions from lawn mowers, planes, and barking dogs. Then there's the physical toll: throat strain and vocal fatigue. Even with professional equipment, you face an endless cycle of recording, editing, re-recording, and fine-tuning takes.

I built VoxBird to transform how we create voice content. Instead of endless takes in front of a microphone, creators can use our web apps to generate multiple high-quality versions of every sentence automatically using their own voice model.

Beyond audiobooks, the technology extends to preserving voices, creating custom voice experiences in games, and interactive storytelling. This is just the beginning — my vision extends to replacing traditional microphone recording entirely, from speech to rap, singing, and even sound effect synthesis.

---

## **What Makes VoxBird Different**

Most AI voice platforms focus on text-to-speech, using large language models to generate synthetic voices. While impressive, these voices often sound artificial and lack the nuanced control that content creators need.

VoxBird takes a different approach. We start with your actual voice, capturing its unique characteristics through brief training samples. Then we use specialized GANs (Generative Adversarial Networks) to refine and enhance the output, preserving the natural qualities that make your voice distinctly yours.

Our platform gives creators granular control over every aspect of voice production, from emotional tone to pacing. Need multiple takes of the same line with different emotional emphasis? VoxBird can generate them instantly, saving hours of recording and editing time.

The result is voice content that maintains human warmth and authenticity while eliminating the physical constraints of traditional recording. No more throat strain, no more perfect room requirements, no more endless retakes.

---

## **The Tech Stack**

Building VoxBird required solving challenges across multiple domains. The frontend uses React and Next.js to create a responsive interface that handles real-time voice generation. On the backend, Python drives our AI processing while Go manages our high-performance API services.

The most interesting engineering challenge came from training. Traditional cloud GPU instances were too expensive for our needs, so we built custom solutions using repurposed crypto mining hardware. This unconventional approach cut our training costs significantly while maintaining the performance we needed.

We also developed specialized data processing pipelines to handle voice data efficiently. Every aspect of the system is optimized for low latency and high throughput, essential for providing the instant feedback creators need when working with voice.

Our infrastructure runs on AWS, using a combination of spot instances for training and dedicated hardware for inference. This hybrid approach helps us maintain reliability while keeping costs manageable as we scale.

---

## **Challenges and Lessons**

The biggest challenge wasn't technical — it was knowing when to stop experimenting and start building. AI research is fascinating, but it's easy to get lost in endless optimization. I learned to focus on real user needs rather than chasing marginal improvements in model metrics.

Early on, I spent weeks trying to eliminate every minor audio artifact. Then a beta tester pointed out that they cared more about quick iteration than perfect audio. This insight changed our direction: we optimized for speed and ease of use, letting creators quickly generate and choose from multiple takes.

Working with voice data taught me the importance of robust testing. Small changes in our models could create subtle issues that standard metrics missed. We developed specialized testing approaches, including blind A/B tests with voice actors, to ensure quality remained high.

The most valuable lesson? Build for real use cases, not theoretical ones. Every feature in VoxBird came from direct user feedback or personal experience with audio production. This kept us focused on solving actual problems instead of building impressive but impractical capabilities.

---

## **Advice for Builders**

My path to building VoxBird wasn't traditional. I learned what I needed when I needed it, whether that was math concepts for game AI or audio processing for voice synthesis. I never waited to feel "ready" or fully credentialed.

The best education came from building real things. Competing in AI contests, experimenting with genetic algorithms, and creating practical applications taught me more than any theoretical study could have. Each project built on the last, gradually expanding what I could tackle.

Most importantly, I worked on problems I genuinely wanted to solve. My frustration with audio recording wasn't just a business opportunity — it was a daily pain point I deeply understood. That personal connection drove me to keep pushing until I found solutions that worked.

## **Conclusion**

Building VoxBird has been an incredible journey of turning frustrating audio production experiences into practical solutions. The technology works — you can try it yourself with our demo voices of Taylor Swift, Snoop Dogg, and Elon Musk at [VoxBird](https://voxbird.com).

Whether you're a content creator tired of endless retakes, or just curious about the future of voice production, I invite you to experience what AI-powered voice generation can do. The days of needing expensive studios and perfect recording conditions are coming to an end.