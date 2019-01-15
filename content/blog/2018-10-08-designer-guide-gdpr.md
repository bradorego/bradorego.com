{
   "categories": [
      "User Experience"
   ],
   "date": "2018-10-09T10:19:19-04:00",
   "description": "Making sense of all of the changes GDPR brought with a practical, actionable set of Do's and Don'ts.",
   "draft": false,
   "image": "/img/posts/designer-guide-gdpr/header.jpg",
   "tags": [
      "GDPR",
      "design",
      "product strategy",
      "prolific interactive"
   ],
   "lessonsLearned": [],
   "title": "A Designer's Guide to GDPR"
}

*Originally written for and edited by [Prolific Interactive](https://www.prolificinteractive.com/2018/10/09/a-designers-guide-to-gdpr/)*

---

_Disclaimer: Nobody who contributed to this overview of GDPR or the accompanying checklist is a lawyer. This does not constitute as legal advice. This is by no means an exhaustive list. Please consult a legal professional for specific questions._

Recall the Great Privacy Update of 2018: Your inbox was flooded with emails from apps and websites you didn’t even remember having an account with, and maybe for the first time in history, privacy policies became a [meme](https://knowyourmeme.com/memes/events/general-data-protection-regulation-gdpr). This momentous occasion was spurred by the enactment of the General Data Protection Regulation (better known as GDPR), the European Union’s landmark regulation on data privacy.

Finalized and announced in 2016, GDPR went into effect May 25, 2018, forcing many companies to adjust how they store and transfer data, how they ask users for consent, and what information they disclose to users. And GDPR doesn’t mess around: violators are slapped with hefty fines: €20M or 4% of the company’s worldwide annual revenue, whichever is higher.

I’m going to say that again: If you violate GDPR, you will be fined a _minimum_ of €20M.

Now that I have your attention, let’s start with [this handy quiz](https://www.bbc.com/news/technology-44224802) the BBC put together to gauge your familiarity with GDPR and identify gaps. The quiz certainly doesn’t cover everything, but it should give you an idea about any blind spots you may have.

# Who does GDPR apply to <a name="who" href="#who"><i class="ion-link"></i></a>

A discussion about GDPR would be incomplete without covering exactly who and what it applies to. There’s a misconception that because the World Wide Web is accessible to everyone everywhere, all companies need to comply with GDPR. Thankfully that isn’t true, but it might apply to more situations than you think.

[Forbes](https://www.forbes.com/sites/forbestechcouncil/2017/12/04/yes-the-gdpr-will-affect-your-u-s-based-business) does most of the work for us in clarifying who GDPR applies to:

<blockquote>
To quickly summarize: Article 3 of the GDPR says that if you collect personal data or behavioral information from someone in an EU country, your company is subject to the requirements of the GDPR. Two points of clarification. First, the law only applies if the data subjects, as the GDPR refers to consumers, are in the EU when the data is collected. This makes sense: EU laws apply in the EU. For EU citizens outside the EU when the data is collected, the GDPR would not apply.

The second point is that a financial transaction doesn’t have to take place for the extended scope of the law to kick in. If the organization just collects “personal data” — EU-speak for what we in the U.S. call personally identifiable information (PII) — as part of a marketing survey, then the data would have to be protected GDPR-style.
</blockquote>

In case you’re still scratching your head, here are the basics:
* If you have any brick & mortar locations in the EU, you’re liable
* If you’ve translated your website into the native language of any EU nations, you should probably be GDPR compliant
* If you maintain a separate EU domain (e.g. .de, .eu), telephone number, or accept the currency of one of the Member States, you should probably be GDPR compliant
* If you collect survey data that includes any [PII](https://en.wikipedia.org/wiki/Personally_identifiable_information) (full name, birth date, email, credit card number, etc), you’re liable

One point of clarification, however, is that GDPR does not apply to any EU citizens living or vacationing abroad. If an EU citizen uses your product or service while on a trip in the USA, you’re not liable. Ultimately, this makes sense: an EU regulation should only apply to companies and individuals in the EU. Many companies decided to be compliant just in case, though, as it’s better to update your policy than get slammed with multi-billion-dollar lawsuits.

Also, being GDPR compliant can make for a better overall experience and enforces some user-friendly design decisions, so you may want to consider being GDPR compliant anyway.

# How to be GDPR compliant <a name="how" href="#how"><i class="ion-link"></i></a>

GDPR compliance can be broken down in many ways, two of which we’ll cover here. For a fuller picture, check out our [“GDPR Do’s and Don’ts”](https://docs.google.com/document/d/1fzu8fBh6mz-bNQwpGlBIQgv31BaPRemYmOPXCINx1yc) checklist that provides a list of action items, features to offer, and design practices that are no longer permitted. In this article, we’ll focus on Consent and Data Rights.

## Consent Rights <a name="consent" href="#consent"><i class="ion-link"></i></a>

When I began investigating consent under GDPR, one of the first things I noticed was that one of my favorite sign-up tools was no longer allowed. Next time you see text above a “Sign Up” button that says something along the lines of, “By signing up for this service, you agree to our Terms & Conditions and Privacy Policy”, and doesn’t provide an action that users need to take (a checkbox, toggle, etc), know now that that’s not GDPR compliant and could be grounds for a lawsuit. In fact, you need a separate user action for each type of consent you’re asking for.

<figure>
  <img src="/img/posts/designer-guide-gdpr/invision-optin.jpg" />
  <figcaption>Bad: InVision’s DesignTalks sign up includes an auto-opt-in, which is no longer allowed under GDPR.</figcaption>
</figure>

What exactly are the types of consent? There isn’t a clear definition here, but you’re better off erring on the side of caution. Consenting to your T&C doesn’t necessarily include consenting to receive email. You can no longer ask for access to data you don’t absolutely need for your service to function (e.g., no asking for contacts unless you need their contacts), and you need to ask for these permissions in the context of what the user is doing (e.g., don’t bombard them with requests upon first signing up; ask for specific information when they first access that part of the app).

<figure>
  <img src="/img/posts/designer-guide-gdpr/google-permissions.jpg" />
  <figcaption>Good: Google’s Data Studio sign up process includes separate consent for each type of email they’d like to send, all of which are separate from consenting to their T&C.</figcaption>
</figure>

## Data Rights <a name="data" href="#data"><i class="ion-link"></i></a>

GDPR has clauses around what they consider “data rights” as well, such as the Right to be Informed, the Right to be Forgotten, and the requirement of having a Data Protection Officer. The DPO is essentially a new role at your company (who must report directly to senior management) and is responsible for ensuring you’re GDPR compliant. This person can have other functions and can be external to the company as well, but that direct line of communication to decision-makers is essential.

The “Right to be Forgotten” is a requirement that’s caused a lot of trouble for companies with existing legacy data. Essentially, any user (current or previous) at any time has the right to request companies completely erase all of their data. While fairly simple to support from a design standpoint, this can be a significant challenge for engineering, especially if your data isn’t currently structured to allow for that erasure. It’s not really an issue for websites, which usually have a fairly simple data structure, but if you’re building an application, your data model needs to account for this.

<figure>
  <img src="/img/posts/designer-guide-gdpr/github-delete.jpg" />
  <figcaption>Good: Github’s Delete Account option is easily found in Account Settings and makes it very clear what will happen if you delete your account.</figcaption>
</figure>

<figure>
  <img src="/img/posts/designer-guide-gdpr/validately-delete.jpg" />
  <figcaption>Bad: Validately provides no way to downgrade or delete your account without contacting them via email.</figcaption>
</figure>

GDPR has a bias toward transparency, which includes the Right to be Informed. On top of needing to disclose what data is being collected and processed, and by whom (yourself and any external/3rd party resources), you need to maintain versions of your Terms and Conditions and Privacy Policy and track when users consent to them. Users have a right to know exactly what they consented to and when, and to be notified of any changes to those policies.

If at all possible, I would recommend setting up one, centralized place for users to find all of this information. yourdomain.com/GDPR is probably a good place to start, where you can list contact information for your DPO, all of the Data Controllers (any person or company that stores, processes, or transmits user data), your policies on the various Rights of the GDPR, and your current Terms, Conditions, and Privacy Policy (or all previous versions if you’re ambitious). Those T & C and PP, by the way, need to be well-designed, with a clear information architecture, so no more giant-block-of-text, either. [SurveyMonkey](https://www.surveymonkey.com/mp/legal/terms-of-use/) is an excellent example of well-designed (and versioned!) Terms of Use.

# Why GDPR makes a better product <a name="better" href="#better"><i class="ion-link"></i></a>

While it might seem like a lot of hoops to jump through, GDPR regulations actually make for a better experience for your users, and adhering to them ultimately produces a superior product. Constraints are fundamental to design, after all.

GDPR enforces some of [Nielsen’s Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/). By providing increased transparency about how data is stored, processed, and used, as well as greater ease opting in and out of certain permissions, you increase “user control and freedom”. Having well-designed, clearly-worded terms, conditions, and privacy policies help your product “speak the user’s language”. Improved permissions and controls also help users prevent, diagnose, and recover from errors as well.

And GDPR is all about context. By providing just-in-time consent, you establish a clear association between the information you’re asking for and why. We’ve all seen (and abandoned) apps that hit you with a flurry of permissions requests on your first sign-up. By asking for location permission when a user first accesses the map feature of your application, not only are you compliant, but you’re helping the user understand why you need it.

<figure>
  <img src="/img/posts/designer-guide-gdpr/permissions.jpg" />
  <figcaption>(Really, really) Bad: Asking for all of the permissions up front, and asking for unrelated permissions to your app’s core functionality.</figcaption>
</figure>

GDPR is also about control. There’s no reason to hide the exit (or anything, really) from users. If someone wants to get off of your service/platform, they will. The harder you make it for them, the less likely they are to ever return or recommend your service. This [peak-end rule](https://en.wikipedia.org/wiki/Peak%E2%80%93end_rule) can be a powerful tool in your design arsenal and should be taken seriously.

# In Closing <a name="closing" href="#closing"><i class="ion-link"></i></a>

There’s certainly no shortage of resources around GDPR and compliance, so don’t stop here. Our [checklist](https://docs.google.com/document/d/1fzu8fBh6mz-bNQwpGlBIQgv31BaPRemYmOPXCINx1yc) tries to be as actionable and direct as possible, but it’s certainly not exhaustive. And we’re always happy to start a conversation about helping you on the journey to compliance.

## Additional Resources

<ul>
    <li><a href="https://designmodo.com/ux-gdpr/" target="_blank" rel="noopener">UX Design and GDPR: Everything You Need to Know</a></li>
    <li><a href="https://www.econsultancy.com/blog/69253-gdpr-10-examples-of-best-practice-ux-for-obtaining-marketing-consent" target="_blank" rel="noopener">GDPR: 10 examples of best practice UX for obtaining marketing consent</a></li>
    <li><a href="https://www.userzoom.com/ux-design/6-examples-of-gdpr-ready-opt-in-forms/" target="_blank" rel="noopener">Six agreeable examples of GDPR ready opt-in forms</a></li>
    <li><a href="https://iapp.org/media/pdf/resource_center/UX_FINAL.pdf" target="_blank" rel="noopener">IAPP’s UX Guide to Getting Consent</a></li>
    <li><a href="https://www.kieri.com/best-gdpr-website-consent-examples/" target="_blank" rel="noopener">Best GDPR Website Consent Examples</a></li>
    <li><a href="https://www.invisionapp.com/blog/gdpr-ux-design/" target="_blank" rel="noopener">How will GDPR affect UX design?</a></li>
    <li><a href="https://medium.com/@maud.im.marechal/gdpr-user-experience-75b8be569333" target="_blank" rel="noopener">GDPR &amp; User Experience</a></li>
    <li><a href="https://wso2.com/library/webinars/2018/05/the-impact-of-gdpr-on-user-experience/" target="_blank" rel="noopener">The Impact of GDPR on User Experience</a> (video)</li>
    <li><a href="https://www.welivesecurity.com/2017/11/13/transparency-machine-learning-algorithms/" target="_blank" rel="noopener">Transparency of machine-learning algorithms is a double-edged sword</a></li>
    <li><a href="https://www.serveit.com/gdpr-user-experience/" target="_blank" rel="noopener">The User Experience Challenge of GDPR</a></li>
    <li><a href="https://uxdesign.cc/3-things-to-keep-in-mind-before-you-design-for-gdpr-92cc6b591fbc" target="_blank" rel="noopener">3 things to keep in mind before you design for GDPR</a></li>
    <li><a href="https://www.slideshare.net/clovissix/gdpr-how-it-impacts-your-ux-content-work" target="_blank" rel="noopener">GDPR &amp; how it impacts your UX / content work</a></li>
    <li><a href="https://ico.org.uk/media/for-organisations/documents/1624219/preparing-for-the-gdpr-12-steps.pdf" target="_blank" rel="noopener">Guide to the General Data Protection Regulation (GDPR)</a></li>
</ul>

---

*Originally written for and edited by [Prolific Interactive](https://www.prolificinteractive.com/2018/10/09/a-designers-guide-to-gdpr/)*
