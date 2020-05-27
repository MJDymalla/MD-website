import React from 'react';

/**
 * All possible responses user can get from each factor depending on answers
 * Responses aim to cover information on both high and low scores
 */
export var responses = {
    // motivation responses
    high_intrinsic: <p>Intrinsic motivation is driven by an interest or enjoyment in work you do.
        Rather than rely on external pressures to engage in certain behaviour or a desire for
        reward. People who are intrinsically motivated are more likely to engage in a task willingly
        as well as work to improve their skills; they find the activity inherently interesting and enjoyable.
        Intrinsic motivation occurs when the action or behaviour is performed because the person enjoys the
        activity itself, for itself and of itself. Typically, intrinsically motivated people do the work not
        to fulfil personal values, but simply because of the intrinsic enjoyment of it. Intrinsically motivated
        people show the highest levels of passion, commitment, and dedication to the work they do, which may
        translate into greater success in the field. The more internally motivated you are, the greater the outcomes
        of wellness and work engagement and perceived competence for you.";</p>
    ,
    high_identified: <p>Identified motivation occurs when you feel greater freedom and willingness to do your work due
        to the work being more in line with your personal goals and sense of identity. People who dedicate themselves
        to entrepreneurial ventures because the associated activities have personal significance are more internally
        motivated. This personal significance though, does not necessarily equate to satisfaction or pleasure; you
        might have a full sense that the behaviour is an integral part of who you are, enabling you to achieve important
        life values or benefit society in some way. The more internally motivated you are, the greater the outcomes of
        wellness and work engagement and perceived competence for you.</p>
    ,
    high_introjected: <p>Introjected motivation occurs when you feel like something is controlling you rather than you
        are controlling the motivation. For example, people forced by circumstances to go into business for themselves
        due to having no other viable option for income than to start a small business to make money. This is not a bad
        thing, just because this is where the motivation to do work or start a business starts doesn’t mean that you can’t
        or won’t develop the passion to do that work as it and you develop. Although originally motivated externally, the
        work you do can develop to evoke feelings of autonomy, contribute to persistence and result in you finding your
        passion in this or related work. People who are internally motivated tend to have greater outcomes of wellness,
        work engagement and perceived competence.</p>
    ,
    high_external: <p>Extrinsic or External motivation is the most externally controlled motivation you’ll feel,
        perhaps leaving you not as self-determined in the reason you do the work you do. When people choose a career
        path in order to seek approval, or work for the primary motivation of payment, they are typically externally motivated,
        rather than being intrinsically motivated, i.e. doing it for the pleasure it brings them. This is not necessarily a bad
        thing, just because this is where the motivation to do work or start a business starts doesn’t mean that you can’t or
        won’t develop the internal motivation to do that work with passion as it and you develop. Although originally
        motivated externally, the work you do can develop to evoke feelings of autonomy, contribute to persistence and
        result in you finding your passion in this or related work. People who are internally motivated tend to have
        greater outcomes of wellness, work engagement and perceived competence.</p>
    ,
    // passion responses
    high_inventing: <p>You show a high passion for inventing, which can include recognizing opportunities. You are typically
        able to scan the environment for new market opportunities, find and develop new products or services, work with
        new prototypes and explore your commercial application. Your passion for inventing might also show in your enjoyment
        for tinkering with new product designs and the explanation of these designs in applications or stories.</p>
    ,
    high_founding: <p>You show a high passion for founding, for creating new ventures. You bring together the necessary human,
        social and financial resources required to create a new venture, enjoy the process of founding a venture, and develop
        an identity that is linked with the identity of the venture. The desire to start new ventures may be so central to your
        idea of self, such an important motivator for you that you are more likely to pass on the management of the ventures to
        another person, or sell the business altogether, in order to begin working on the next venture or invention or retain
        ownership and management as part of a larger portfolio of businesses.</p>
    ,
    high_developing: <p>You show a high passion for developing, which includes growing the business. You are more likely to
        grow and expand the business by exhibiting unique strategies for organizational management that increase sales, finding
        new markets, hiring new employees, or finding external investors, utilizing different management styles and communicating
        your vision with key stakeholders in a way that promotes continued expansion. You might show high levels of passion for
        founding and growing a new business or stepping into an existing start-up and developing its sustainability or value.</p>
    ,
    // growth responses
    high_growth: <p>People tend to operate one of two main types of new ventures, either growth or lifestyle-oriented businesses.
        While you focus on growth, other business owners might focus on lifestyle/income, making up two different groups in
        entrepreneurship. As a growth-oriented entrepreneur you are more likely to accept higher levels of risk in your career
        and business decisions than family-income oriented entrepreneurs, and you’re likely to take on much higher levels of
        risk than managers in large organizations. Growth oriented entrepreneurs have a higher risk tolerance than do managers</p>
    ,
    low_growth:
    <div>
        <p>People tend to operate one of two main types of new ventures, either growth or lifestyle-oriented businesses.
        While some entrepreneurs focus on growth, some business owners focus on lifestyle/income. As a lifestyle-oriented
        entrepreneur you are more likely to desire lower levels of risk in your career and business decisions than family-income
        oriented entrepreneurs, and you’re likely to take on levels of risk similar to managers in large organizations.<br/>
        Scoring lower in growth orientation simply means that you prefer/would prefer a business that you can manage yourself
        and/or with a few key employees, that provides/would provide a good living, with a reduced risk of failure, and less
        likelihood of making you financially wealthy. There is no right or wrong in your growth orientation, it is entirely a
        life choice. There are many factors to happiness in life and no-one can tell you that their happiness should be your happiness.
        You do you and enjoy the choices you make.</p>
    </div>
    ,
    // entrepreneurial orientation responses
    high_risk_acceptance:
    <div>
        <p>Scoring more highly in risk propensity in the entrepreneurial context than do members of the general
        population probably means that you more objectively assess risk and do not perceive your actions as risky. People with
        domain knowledge, or more motivated exploratory skills, tend to see opportunities where others don’t see opportunities or
        perceive more risk than they’re willing to take. Entrepreneurs have been known to be capable risk managers whose abilities
        defuse what others might perceive as excessive risk: entrepreneurs believe that risk can be reduced by increased effort,
        skill or execution. It is clear that people who are more entrepreneurial adopt greater risk on average - entrepreneurs risk
        their time (often unpaid, or for relatively less money) and their own capital in order to realise their goals.
        Your risk propensity is the degree to which you are open to taking chances with respect to affordable loss. Risk-taking is
        fundamental to entrepreneurship as entrepreneurial decisions are made in highly uncertain circumstances. As an entrepreneur
        you bear the ultimate responsibility for your decisions with risk of personal loss.</p>
        <p>Dealing with entry into new ventures or new markets, introducing new products or services, engaging uncertain consumer and
        competitive responses, dealing with resource and supplier availability, and most significantly, having your own investment of
        time and money on the line…all equate to higher levels of risk propensity.  Such levels of potential personal accountability/gain/loss
        are not borne by managers or employees. Entrepreneurs tend toward calculated risk-taking: doing everything possible to get
        the odds in your favour and avoiding taking unnecessary risks.</p>
    </div>
    ,
    high_innovativeness:
    <div>
        <p>A higher score in Innovativeness reflects your interest in looking for novel ways of action, typically
        involving a creative orientation to problem solving. Innovativeness is important for you as an intrapreneur/entrepreneur
        as it enables you to create and launch new products or services, make improvements on existing products or services, find
        a better way of doing something by applying improved solutions that meet existing market needs, new market needs, or as yet
        unidentified market needs. A business will only be innovative to the extent that you as its human resource are innovative.
        There is a clear empirical relationship between innovativeness and entrepreneurial success/performance - the more innovative
        you are the more likely you are to perform and succeed in your venture/s.</p>
    </div>
    ,
    high_proactivity:
    <div>
        <p>The higher you score in proactivity the more you tend to seek to create your own environment/s. You’re more
        likely to have an action orientation that shows a tendency for taking initiative, making decisions quickly, and feeling
        impatient for results. You likely take an active, change-making, and self-starting approach to work goals and tasks and
        persist in overcoming challenges. You tend to take control and make things happen rather than simply adjusting to a situation
        or waiting for something to happen; you have an internal locus of control.  Proactivity is important for you because in the
        entrepreneurial context you need to be self-starting and adaptive, create your environment by founding new ventures, decide
        new business structures and operations, respond to changing markets and customer preferences, and identify and act upon new
        venture ideas. Sometimes you need to have the foresight to capitalize on those ideas in anticipation of, or creation of,
        currently unknown or future demand…and that is exciting…the more proactive you are the more likely you are to create new
        markets or get in front of competitors in existing markets. Lower scores in proactivity tend to occur if you’re relatively
        passive, accept things as they are (an external locus of control) and be shaped by, rather than shape, your surroundings.</p>
    </div>
    ,
    // entrepreneurial self-efficacy responses
    high_self_efficacy:
    <div>
        <p>Having higher entrepreneurial self-efficacy (ESE) means that you have a general belief in your ability to
        leverage skills and talents to achieve important goals (i.e. you are a self-confident person). If you are high in ESE you have
        an internal locus of control: you believe in yourself, and you believe that you can control and influence the outcome of your
        actions. With self-confidence and optimism comes the belief in your ability to overcome barriers and build confidence in
        those around you.</p>
        <p>Whether you have passion, are sufficiently motivated and have the autonomy to implement your own systems…if you don’t have
        self-efficacy you have what you need (entrepreneurially speaking); self-efficacy enables you to control your world, believe in
        what you’re doing and your ability to achieve it, influence others to achieve your goals and take initiative where you see it.</p>
        <p>The higher your ESE the more you typically believe you are capable of successfully performing essential entrepreneurial
        activities, such as marketing, innovation, management, risk taking, and financial control…you believe in yourself!
        If you are a growth oriented entrepreneur you are more likely to show self-efficacy in strategies that focus on new
        technologies and market expansion, and willingness to incur opportunity costs (and assume risk) for the success of your business.
        ESE is a key component of a ‘can do’ motivation, which has consistently been linked to proactivity. It’s important for you as
        you must be confident in your abilities to perform various tasks, often unanticipated tasks, that are necessary for
        entrepreneurial success in uncertain situations.</p>
        <p>Be careful though, too much self-confidence can also be negative and lead to hubris, overconfidence and possible escalation
        of commitment to a failing course of action…you needn’t go down that path…call it early. Pivoting early according to
        customer enquiry and demand is an early mark of future success…feel your ESE and go with that.</p>
    </div>
    ,
    low_self_efficacy:
    <div>
        <p>Scoring lower in entrepreneurial self-efficacy (ESE) means that you might not have a general belief in your
        ability to leverage skills and talents to achieve important goals (i.e. the personal sense that you are a self-confident person).
        If you are low in ESE you have more of an external locus of control: you might believe that things happen to you rather than
        holding a strong belief that you can control and influence your world.</p>
        <p>With more self-confidence and optimism would come a stronger belief in your ability to overcome barriers and build
        confidence in those around you. Whether you have passion, are sufficiently motivated and have the autonomy to implement
        your own systems…if you don’t have self-efficacy you won’t have what you need (entrepreneurially speaking); self-efficacy
        enables you to control your world, believe in what you’re doing and your ability to achieve it, influence others to achieve
        your goals and take initiative where you see it.</p>
        <p>The higher your ESE the more you typically believe you are capable of successfully performing essential entrepreneurial activities,
        such as marketing, innovation, management, risk taking, and financial control…you believe in yourself! ESE is a key component of
        a ‘can do’ motivation, which has consistently been linked to proactivity. It’s important for you as you must be confident in
        your abilities to perform various tasks, often unanticipated tasks, that are necessary for entrepreneurial success in uncertain situations.<br/>
        If you were a growth oriented entrepreneur you would be more likely to show self-efficacy in strategies that focus on new technologies
        and market expansion, and willingness to incur opportunity costs (and assume risk) for the success of your business. If you were a
        lifestyle entrepreneur, you are more likely to have a focus on the status quo, local markets and a desire not to incur to many
        opportunity costs or adopt too much risk in ‘the name of success.’</p>
        <p>Be careful though - too much self-confidence can also be negative and lead to hubris, overconfidence, and possible escalation
        of commitment to a failing course of action…you need not go down that path…call it early. Pivoting early according to customer
        enquiry and demand is an early mark of future success…feel your ESE and go with that.</p>
    </div>
    ,
    // need to achieve responses
    high_need_to_achieve:
    <div>
        <p>Many entrepreneurs desire to achieve at a high level. The higher you score in your need to achieve the more
        likely you are internally driven by a strong desire to compete, to excel against self-imposed standards and to pursue and
        attain challenging goals. A need for achievement (N-Ach) refers to your desire for significant accomplishment, mastering of
        skills, control, or high standards. N-Ach often includes intense, prolonged, and repeated efforts to accomplish something difficult.
        To work with singleness of purpose towards a high and distant goal. To have the determination to win. This need is influenced by
        your internal drive for action (intrinsic motivation), and the pressure exerted by the expectations of others (extrinsic motivation).
        N-Ach motivates entrepreneurs to succeed in competition with other businesses, and to excel in activities important to them. You
        are more likely to seek challenges and a high degree of independence. Your most satisfying reward is more likely to be the recognition
        of your achievements.</p>
        <p>Take care though, not all high-need-for-achievement is considered positive…a constant, insatiable need to achieve can lead
        to anxiety and dysfunction, and that instead of happiness or well-being, high- N-Ach professionals seek "relief in the accomplishment
        of tasks" creating a cycle marked by a lack of a real sense of purpose.</p>
    </div>
    ,
    low_need_to_achieve: <p>If you score lower on need for achievement (N-Ach) it suggests that you might choose easy tasks in order to
        minimise risk of failure, or highly difficult tasks, such that failure might be reasonably expected and would not be embarrassing.
        Those with high N-Ach tend to choose moderately difficult tasks, feeling that they are challenging, but within reach. People
        high in N-Ach are characterised by a tendency to seek challenges and a high degree of independence. Their most satisfying reward
        is the recognition of their achievements…you can join them.</p>
    ,
    // grit responses
    high_grit:
    <div>
        <p>Grit is known as determination, perseverance, commitment to continue and/or tenacity. You use it to keep working
        through the highs and lows, trials, and tribulations, and all the variations of your venture. In showing persistence,
        you are more likely to show much more dedication to success, which typically needs focus to overcome obstacles and setbacks.
        Your ability to bounce back quickly from disappointment, and to remain persistent in the face of setbacks (e.g. you likely
        do not give up easily). This is important for you in a world where not everybody sees the merit of your idea.</p>
        <p>Some suggest that the singularly most important personal quality in entrepreneurship, and the singularly most shared personal
        quality by the most prominent leaders in every field: is grit. More than passion alone, the number one self-defining mindset
        for entrepreneurial success may be grit. Ability alone does not bring about success, rather, high achieving entrepreneurs
        show “ability combined with zeal, and capacity for hard labor.” Grit entails working strenuously toward challenges,
        maintaining effort and interest over years despite failure, adversity, and plateaus in progress. A gritty you approaches
        achievement as a marathon; your advantage is stamina. Whereas disappointment or boredom signals to others that it is time
        to change trajectory and cut losses, the gritty stay true.</p>
    </div>
    ,
    low_grit:
    <div>
        <p>Grit is known as determination, perseverance, commitment to continue and/or tenacity. You need as much of
        it as you can get to keep working through the highs and lows, trials, and tribulations, and all the variations of
        your venture. The more persistence you show the more likely you’ll show more dedication to success, which typically needs
        focus to overcome obstacles and setbacks. Developing grit would develop your ability to bounce back quickly from disappointment,
        and to remain persistent in the face of setbacks (e.g. you would not give up easily). This is important for you in a world
        where not everybody sees the merit of your idea.</p>
        <p>Some suggest that the singularly most important personal quality in entrepreneurship, and the singularly most shared
        personal quality by the most prominent leaders in every field: is grit. More than passion alone, the number one self-defining
        mindset for entrepreneurial success may be grit. Ability alone does not bring about success, rather, you’ll need “ability
        combined with zeal, and capacity for hard labor.” Grit entails working strenuously toward challenges, maintaining effort
        and interest over years despite failure, adversity, and plateaus in progress. A gritty you would approach achievement as
        more of a marathon; you’d develop stamina. Whilst the gritty persist, the lower you score in grit the more the potential
        for disappointment or boredom suggesting that it’s time for you to change trajectory and cut losses.</p>
    </div>
    ,
    // tolerance for ambiguity respones
    high_tolerance: <p>A tolerance for ambiguity means that you have the ability to perceive ambiguous or doubtful situations as open,
        neutral, or desirable. In ambiguous situations you might be working with information that is complicated, insufficient,
        or outwardly conflicting. Having a higher tolerance for ambiguity you are more likely to find ambiguous decisions desirable,
        challenging, interesting or enjoyable. You are more likely to work hard to triumph uncertain and unforeseeable
        situations in order to perform well. Tolerance for Ambiguity is important for you because it enables you to operate in
        uncertain, unpredictable environments with work situations varying from week to week.</p>
    ,
    low_tolerance: <p>Scoring lower in tolerance for ambiguity means that you are more likely to perceive ambiguous or doubtful
        situations as less desirable. In ambiguous situations you might be working with information that is complicated, insufficient,
        or outwardly conflicting. Having a lower tolerance for ambiguity you are less likely to find ambiguous decisions desirable,
        challenging, interesting or enjoyable. You are less likely to work hard to triumph uncertain and unforeseeable situations as
        it may not be for you. If you develop your tolerance for ambiguity you are likely to grow your capacity to operate in uncertain,
        unpredictable environments with work situations varying from week to week.</p>
    ,
    // resilience responses
    high_resilience:
    <div>
        <p>Resilience is the amalgamation of a range of personal and behavioural qualities rather than a specific
        characteristic. The more resilient you are the more your ability to recover from or adjust easily to misfortune or change.
        You can’t survive as an entrepreneur without resilience because you are likely to experience failure at least once, maybe
        multiple times; that’s the nature of trying something that’s never been done before. Resilience means not giving up and
        being energised by what you have learned. "I have not failed. I have just found ten thousand ways that won't work” …resilient,
        Thomas Edison was.</p>
        <p>There are times when challenges seem insurmountable – but you are more likely to succeed with resilience! There are times
        when challenges are so great that you fail. But you will learn. Both experiences are needed for success. Your higher resilience
        means that you can more easily and quickly overcome setbacks related to your life and career aspirations. Resilience is
        important for you because it is a dynamic and evolving process through which you acquire the knowledge, abilities and skills
        to help you face uncertainty with a positive attitude, with creativity and optimism, relying on your own resources. The
        higher you score the more likely you are to be more resilient when faced with adverse circumstances and the more able to
        develop and mobilize resources you don’t typically control…quite the definition of being entrepreneurial.</p>
        <p>Your resilience enables you to renew yourself over time through innovation and adjustments to diverse and turbulent changes in the
        environment. You tend to have a higher degree of self-esteem; feel you are in control and not afraid to fail; in the case
        of adversity you are more likely to ‘rise again’ stronger than before due to learning from a situation, having made and learned
        from mistakes, and seeing them as an opportunity rather than a failure.</p>
    </div>
    ,
    low_resilience:
    <div>
        <p>Resilience is the amalgamation of a range of personal and behavioural qualities rather than a specific characteristic.
        The more resilient you are the more your ability to recover from or adjust easily to misfortune or change. Scoring lower on
        resilience suggests that you could develop the ability to experience and deal with failure. Resilience means not giving up and
        being energised by what you have learned. "I have not failed. I have just found ten thousand ways that won't work” …resilient,
        Thomas Edison was. You can be too.</p>
        <p>There are times when challenges seem insurmountable – but you are more likely to succeed with resilience. There are times when
        challenges are so great that you fail. But you will learn. Both experiences are needed for success. Developing your sense of
        resilience means that you can more easily and quickly overcome setbacks related to your life and career aspirations. Resilience
        is important for you because it is a dynamic and evolving process through which you acquire the knowledge, abilities and skills
        to help you face uncertainty with a positive attitude, with creativity and optimism, relying on your own resources. Developing
        your resilience means developing your ability to deal with adverse circumstances and mobilize resources you don’t typically
        control…quite the definition of being entrepreneurial.</p>
        <p>Resilience will enable you to renew yourself over time through innovation and adjustments to diverse and turbulent changes
        in the environment. With a greater sense of resilience, you will likely have a higher degree of self-esteem; see mistakes
        as a source of positive feedback, see the learnings as opportunity, feel that you are in control and not afraid to fail. It sounds ideal.</p>
    </div>
}




