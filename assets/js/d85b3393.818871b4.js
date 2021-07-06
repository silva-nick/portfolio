(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[352],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7166:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],s={slug:"lsa",title:"Understanding Latent Semantic Analysis",author:"Nick Silva",author_title:"College Rising Junior",author_url:"https://github.com/silva-nick",author_image_url:"https://avatars.githubusercontent.com/u/39960606?v=4",tags:["blog","data science"]},l=void 0,c={permalink:"/portfolio/blog/lsa",editUrl:"https://github.com/silva-nick/portfolio/tree/main/blog/blog/2021-7-04-lsa.mdx",source:"@site/blog/2021-7-04-lsa.mdx",title:"Understanding Latent Semantic Analysis",description:"Introduction to LSA:",date:"2021-07-04T00:00:00.000Z",formattedDate:"July 4, 2021",tags:[{label:"blog",permalink:"/portfolio/blog/tags/blog"},{label:"data science",permalink:"/portfolio/blog/tags/data-science"}],readingTime:14.005,truncated:!0,prevItem:{title:"How to create a custom plugin for Docusaurus",permalink:"/portfolio/blog/docusaurus-plugins"},nextItem:{title:"Big Launch!",permalink:"/portfolio/blog/big-launch"}},d=[{value:"Introduction to LSA:",id:"introduction-to-lsa",children:[]},{value:"Improving LSA:",id:"improving-lsa",children:[]},{value:"Applying LSA:",id:"applying-lsa",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"References:",id:"references",children:[]}],m={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction-to-lsa"},"Introduction to LSA:"),(0,o.kt)("h4",{id:"lsa"},"LSA"),(0,o.kt)("p",null,"A classical problem in the field of natural language processing (NLP) is that of finding and matching semantic meaning from large bodies of text. Some classical solutions involve stemming, controlled vocabularies, and using thesauri ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". A different approach to this problem is Latent Semantic Analysis (LSA). LSA is an application of dimension reduction to the fields of natural language processing and information retrieval ",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Mathematically, it involves (1) creating a vector encoding of a large body of text, (2) computing a truncated singular value decomposition on the matrix, and (3) retrieving word and vector similarity in the dimension-reduced space. LSA is a well-studied model that remains an important tool and benchmark in the task of semantic similarity."),(0,o.kt)("p",null,"Mathematically, LSA finds a singular value decomposition for a term-document matrix. The term-document matrix can be constructed in varying ways based off of different document encoding methods. We can signify this matrix A(m*n) for m terms and n documents. The singular value decomposition of A is given by,A=U","*","sigma","*","V^T where sigma gives the sorted singular values of A and U and V are the decomposed sides of the term-document matrix. In a truncated SVD, we reduce the size of these matricies by taking only the k largest singular values and their respective vectors in U and V. As a result we find A","_","k, a rank k representation of our original term-document matrix."),(0,o.kt)("p",null,"Thus, the assumption of LSA is that semantically similar terms will be physically close together in the dimension-reduced space. Then, taking advantage of this distance, we can apply different algorithms to extract relationships between the documents. Moreover, the authors provide detailed argumentation as to why this type of dimension reduction parallels that used in the brain ",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,o.kt)("p",null,"In this report, we look to describe, improve, and apply LSA. To begin, we provide a survey of the application of LSA to different NLP tasks and an experimental approach to understanding LSA in these settings. Next, we seek to improve and test different aspects of LSA and provide suggestions for some of the different variations available under the broader LSA framework. Finally, we attempt to prove the application of LSA in modern deep learning NLP models by inserting it as a re-weighting layer in the ",(0,o.kt)("inlineCode",{parentName:"p"},"deepspeech")," pipeline."),(0,o.kt)("h4",{id:"different-lsa-tasks"},"Different LSA Tasks"),(0,o.kt)("p",null,"LSA, although frequently applied to the task of semantic indexing, can also be applied to other NLP tasks. By capturing the dimension-reduced space, we are better able to cluster and make predictions on the data. Some of these applications include: sentiment analysis, topic grouping, and document classification. LSA's ability to reduce the dimensionality of the data while retaining much of its latent meaning also makes it a useful tool in a diverse group NLP pipelines run on large datasets."),(0,o.kt)("p",null,"The application of LSA for sentiment analysis epitomizes its utility across a wide variety of NLP tasks. Generally, sentiment analysis refers to the task of extracting opinion or emotional data from text or image data. Modern semantic analysis models are often trained on huge labeled datasets of topic specific text. Recent models have become accurate enough to become useful models for guiding business decisions ",(0,o.kt)("sup",{parentName:"p",id:"fnref-4"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,o.kt)("p",null,"In this experiment, we will be using the ",(0,o.kt)("em",{parentName:"p"},"Twitter US Airline Sentiment")," dataset accessed via Kaggle ",(0,o.kt)("sup",{parentName:"p",id:"fnref-5"},(0,o.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),". As described by the original source, this dataset is,"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'A sentiment analysis job about the problems of each major U.S. airline. Twitter data was scraped from February of 2015 and contributors were asked to first classify positive, negative, and neutral tweets, followed by categorizing negative reasons (such as "late flight" or "rude service").')),(0,o.kt)("p",null,"There exists some pre existing literature on the use of LSA for sentiment analysis. Wang and Wan ",(0,o.kt)("sup",{parentName:"p",id:"fnref-6"},(0,o.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6"))," suggest a six part ML pipeline that involves cleaning the data, computing the SVD, deciding the polarity of the words, combining the word orientation, and finally running SVM classification on the resulting data. Using this method they were able to achieve reasonably accurate results."),(0,o.kt)("p",null,"To simplify the method, we will run the pipeline following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clean data and find vector encodings."),(0,o.kt)("li",{parentName:"ol"},"Find a dimension reduced SVD for all the data."),(0,o.kt)("li",{parentName:"ol"},"Run kNN-Classification on the resulting dimension reduced SVD.")),(0,o.kt)("p",null,"In running this pipeline with eight neighbors and reducing the term-document matrix to a rank 20 SVD, the algorithm achieved a classification accuracy of 70%. Obviously, this highly naive method for sentiment analysis failed to classify the tweets at a high rate. The sentiment breakdown of the original tweets was 63% negative, 16% positive, and 21% neutral. Therefore, the model did marginally better than had it always classified tweets as negative."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sentiment",src:n(7403).Z})),(0,o.kt)("p",null,"A similar task that utilizes LSA dimension reduced matrices is topic modeling. Topic modelling is an unsupervised learning method that is used to cluster documents based on their textual context. This definition is intentionally vague as topic modeling describes a class of algorithms and techniques applied to many different more specific NLP tasks. For example, the dimension-reduced clusters found using a topic modeling algorithm, when labels are provided, can be used to classify documents. The ability of these models to access latent information apparent in the documents makes them easy to apply to real-world problems. Po and Bergamaschi report a simple four stage method to extract movie recommendation data from plot summaries ",(0,o.kt)("sup",{parentName:"p",id:"fnref-7"},(0,o.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7")),". The concept of topic modelling will be discussed in more detail in the ",(0,o.kt)("em",{parentName:"p"},"Improving LSA")," section of this report."),(0,o.kt)("p",null,"Finally, among the most fundamental tasks solutions of which frequently utilize LSA is indexing and information retrieval. The final section of this report will focus on applying LSI (latent semantic indexing, synonymous to LSA) to improve pretrained STT models. The original LSI paper, ",(0,o.kt)("em",{parentName:"p"},"Deerwester et. al")," ",(0,o.kt)("sup",{parentName:"p",id:"fnref-8"},(0,o.kt)("a",{parentName:"sup",href:"#fn-8",className:"footnote-ref"},"8")),", provides the following methods of document-document and term-term comparison. After having computed A","_","k=U","_","k","*","sigma","_","k","*","V^T","_","k, we find the term-to-term product matrix A","*","A^T=U","_","k","*","sigma^2","_","k","*","U^T","_","k and the document-to-document product matrix A^TA=V","_","k","*","sigma^2_k","*","V^T","_","k. The i,j value of this matrix represents the similarity score between the i","*","text{th} and j","*","text{th} term/document in the original term-document matrix. Finally, the authors provide a metric for creating a dimension-reduced representation of a document that doesn't exist in the original dataset. For original vector encoding of document p equal to X","_","p we can find a dimension reduced version under the constraint that transforming a vector in the matrix returns itself, V","_","p=X","_","p^T","*","U","*","sigma^-1"),(0,o.kt)("p",null,"In these methods, LSA takes advantage of the distributional hypothesis which, in the context of linguistics, states that the semantic meaning of words in text can be understood by observing the context the words are found in ",(0,o.kt)("sup",{parentName:"p",id:"fnref-9"},(0,o.kt)("a",{parentName:"sup",href:"#fn-9",className:"footnote-ref"},"9")),". In applying this hypothesis, we are able to generate a thesaurus (in the form of the term-to-term product matrix) from only the latent features of documents."),(0,o.kt)("h2",{id:"improving-lsa"},"Improving LSA:"),(0,o.kt)("p",null,"In this section, we examine and experiment on small adaptations to the LSA framework. All experiments will be performed on the topic classification/ modeling task, using the 20 newsgroup dataset ",(0,o.kt)("sup",{parentName:"p",id:"fnref-10"},(0,o.kt)("a",{parentName:"sup",href:"#fn-10",className:"footnote-ref"},"10")),". To reduce the datasets size for ease, we selected 5 of the 20 topics: atheism, graphics, car reviews, baseball, and space. These experiments will also replace traditional SVD with SKLearn's Randomized SVD (through 6 iterations) which is an implementation of Halko et. al 2009 ",(0,o.kt)("sup",{parentName:"p",id:"fnref-11"},(0,o.kt)("a",{parentName:"sup",href:"#fn-11",className:"footnote-ref"},"11")),"."),(0,o.kt)("p",null,"To begin, we performed a traditional LSA on the dataset. The kNN classifier (k=5) run on a rank 100 truncated SVD had an accuracy of 64%. We will use this number as our benchmark for future tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# 20 graphics terms with largest weight\n['edu', 'lines', 'subject', 'graphics', 'organization', 'image', 'com', 'university',\\\n     'jpeg', 'posting', 'host', 'file', 'nntp', 'software', 'data', 'use', \\\n         'writes', 'images', 'files', 'know']\n")),(0,o.kt)("p",null,"Across the experiments we find that the document encoding, ceteris paribus, had marginal affect on the model's accuracy. The classifier used however, made a major difference; Naive Bayes and SVM appeared as two viable options. In the final section, we find that all other attempted methods of dimension reduction fail to be computationally feasible for the large matrices required."),(0,o.kt)("h4",{id:"document-encodings"},"Document Encodings"),(0,o.kt)("p",null,"In the paper that introduced LSA as an NLP technique, the textual documents were encoded as count vectors. Additionally, the authors suggested performing a logarithmic transformation to regularize the vectors. However, it remains unclear whether the aforementioned encoding and transformation are appropriate in optimizing the model. In the next section, we lay out a framework and experimental results from routine experiments across different. Across all experiments we plan to use the same five topic subsample of the 20 news dataset reduced to 100 dimensions via SVD."),(0,o.kt)("p",null,"We compare two new vector encoding techniques: one-hot or binary encoding and TF-IDF. Likewise we compare different potential tranformations that can be applied to the standard word-count encoding. In each case, we ran the LSA model on the new term-document matrix and calculated the model's accuracy. Count and TF-IDF emerged as the two best encodings but only one-hot and the exponentially transformed vectors showed significantly different performance. A summary of the results is plotted below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"vectors",src:n(8957).Z})),(0,o.kt)("p",null,"Overall, it appears that either TD-IFD or a transformed count vector serve as the highest performance encodings. That said, this experiment was only across one NLP task, one dataset, and didn't include other, more modern vector encodings."),(0,o.kt)("h4",{id:"classifiers"},"Classifiers"),(0,o.kt)("p",null,"The final step in the topic classification task involves applying a classification algorithm on the dimension reduced representation of the textual data. In other areas of this report, kNN was used as the constant classification algorithm. However, kNN is a relatively naive classification algorithm and our results could potentially be improved by replacing the kNN classifier with other classes of algorithms. Under the same setting as the other experiments in this section, we test and compare the performance of the kNN classifier to that of multlinomial naive Bayes and linear SVM."),(0,o.kt)("p",null,"Although kNN provided an above-random classification performance, it was easily surpassed by the accuracy and generalization performance of the naive Bayes and linear SVM classifiers. Both of the newly introduced models achieved sub 10% error values on the test data. This result is visualized in the barr graph below."),(0,o.kt)("p",null,"![clf][(/img/blog/clf.png)]"),(0,o.kt)("p",null,"Although this was a survey of just a small group of classifiers, our results show the importance of classifier selection. Moreover, it exemplifies the power of the LSA model; by reducing dimensionality of the model, we are able to linearly separate the topics into their respective groups and do so with a hight level of accuracy."),(0,o.kt)("h4",{id:"ideal-dimensions"},"Ideal Dimensions"),(0,o.kt)("p",null,"Another common problem when applying LSA is that of specifying the ideal number of dimensions of the transformed encoding. Being able to reduce the number of dimensions of the data, the word vectors in which could be tens of thousands of integers long, is the fundamental goal and property of the truncated SVD. However, removing too many dimensions could result in a representation that doesn't manage to accurately describe the dataset. The ideal number of output dimensions is a product of the input data, vector length, and sample size. In this section, we hope to provide a simple quick method to optimize the final output truncation."),(0,o.kt)("p",null,"The figure below, accessed from ",(0,o.kt)("em",{parentName:"p"},"An Introduction to LSA"),", shows this phenomenon visually ",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". In this experiment, they used LSA to find synonyms on a TOEFL dataset. They found that they maximized correctness when the data was reduced to ~300 dimensions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LSA Mountain",src:n(5605).Z})),(0,o.kt)("p",null,"However, 300 is not a universal number, nor is 100 (the value originally suggested by the authors). Instead, careful tuning is important to ensure that the number of dimensions is correct. Here we provide a simple method to find a locally optimal number of dimension drawing ideas from SGD. In this case, however, we are able to only calculate the SVD once and upon each update remove more vectors from the decomposition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def best_dim(train_X, train_Y, threshold = .01):\n    # Decide the number of components:\n    n_components = 100\n    if train_X.shape[0] > 5000:\n        n_components = 1000\n\n    # Run SVD on the training data\n    U, sigma, VT = randomized_svd(train_encoding,\n                                n_components=1000,\n                                n_iter=6,\n                                random_state=None)\n\n    # Train a kNN classifier on the truncated SVD\n    clf_knn = KNeighborsClassifier().fit(VT.T, train_Y) # Also customizable classifier, params\n    # Test data transformed\n    test_trans = test_encoding.T @ U @ np.diag(np.power(sigma, -1))\n    # Compute score\n    last = clf_knn.score(test_trans, test_Y)\n\n    delta = -.1         # Arbitrary\n    increasing = False\n\n    while delta > threshold:\n        n_components += (int) n_components \\* delta\n\n        # Train a kNN classifier on the truncated SVD\n        clf_knn = KNeighborsClassifier().fit(VT[:n_components].T, train_Y)\n        # Test data transformed\n        test_trans = test_encoding.T @ U[:n_components] @ np.diag(np.power(sigma[:n_components], -1))\n        # Compute score\n        temp = clf_knn.score(test_trans, test_Y)\n\n    return (last, n_components)\n")),(0,o.kt)("h4",{id:"dimension-reduction"},"Dimension Reduction"),(0,o.kt)("p",null,"In traditional LSA, the SVD is used to compute a lower dimension representation of the text encoding matrix. Under the general methodology of LSA, however, this step may be feasibly be replaced with other dimension reduction techniques. In this section, we attempted to replace the SVD with other methods of dimension reduction. Specifically, we ran a standard LSA pipeline simply replacing SVD with ISOMAP and metric MDS. All tests were run on the five topic subsample of the 20 news dataset."),(0,o.kt)("p",null,"Performing this experiment exposed one of the important reasons why the truncated SVD works well in this situation; It is one of the few dimension reduction methods that is computationally feasible for the huge matrices used in NLP. Other methods, like MDS and ISOMAP are computationally infeasible for matrices as small as the 70,000 ","*"," 3,000 term-document matrix used in this experiment. Moreover, SVD allows for a k-rank dimension reduction while other methods often perform best in n-to-2 or n-to-3 situations."),(0,o.kt)("h2",{id:"applying-lsa"},"Applying LSA:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"I was not able to finish the code for this section, however, I find the idea interesting and hope to do more research into STT models in the future.")),(0,o.kt)("h4",{id:"concept"},"Concept"),(0,o.kt)("p",null,"The motivation of this section of this paper stems from the wide application of pretrained deep speech to text models (STT) in business applications. These models, although increasingly accurate, often struggle with generalization, make recurrent mistakes, and are difficult to tune to specific input data ",(0,o.kt)("sup",{parentName:"p",id:"fnref-12"},(0,o.kt)("a",{parentName:"sup",href:"#fn-12",className:"footnote-ref"},"12")),". For example, some models trained for normal speech recognition struggle when introduced to rare words. However, if a professor or orator is speaking in the topic-specific language of their field, the models often miss-simplify the person's speech resulting in decreased performance."),(0,o.kt)("p",null,'Most modern open source and commercial models have "boost" parameters or more advanced methods to allow businesses to fine tune models to their needs ',(0,o.kt)("sup",{parentName:"p",id:"fnref-13"},(0,o.kt)("a",{parentName:"sup",href:"#fn-13",className:"footnote-ref"},"13")),". These tools, however, often have to be pre-set and provide a one-time reweighting to the model. In many use cases however, an ideal model may dynamically adjust its weights during use as the topic of the speech changes. This type of reweighting requires a lightweight computationally simple solution."),(0,o.kt)("p",null,"LSA provides a simple method that could be used to dynamically adjust STT model weights as the topic of the speech changes."),(0,o.kt)("h4",{id:"experiment"},"Experiment"),(0,o.kt)("p",null,"To begin, we loaded the latest ",(0,o.kt)("inlineCode",{parentName:"p"},"deepspeech")," library ",(0,o.kt)("sup",{parentName:"p",id:"fnref-14"},(0,o.kt)("a",{parentName:"sup",href:"#fn-14",className:"footnote-ref"},"14"))," into a docker environment with the standard pretrained English model. From empirical analysis, this model achieved 16% error on the Switchboard Hub5'00 dataset ",(0,o.kt)("sup",{parentName:"p",id:"fnref-15"},(0,o.kt)("a",{parentName:"sup",href:"#fn-15",className:"footnote-ref"},"15")),". Next, to get a benchmark on the model's unchanged state, we ran it on snippets of our dataset. The dataset in question is a collection of..."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"LSA is a simple application of dimension reduction that serves as a key item in pipelines for a diverse group of NLP tasks. Despite being first documented over thirty years ago, it remains a powerful tool across many tasks."),(0,o.kt)("h2",{id:"references"},"References:"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Dumais, S.T. (2004), Latent semantic analysis. Ann. Rev. Info. Sci. Tech., 38: 188-230. ",(0,o.kt)("a",{parentName:"li",href:"https://doi.org/10.1002/aris.1440380105"},"https://doi.org/10.1002/aris.1440380105"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Dumais, S. T., Furnas, G. W., Landauer, T. K., & Deerwester, S. (1988). Using latent semantic analysis to improve information retrieval. Proceedings of CHI'88 Conference on Human Factors in Computing Systems, 281\u2013285.",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Landauer, T. K., Foltz, P. W., & Laham, D. ",(0,o.kt)("a",{parentName:"li",href:"http://lsa.colorado.edu/papers/dp1.LSAintro.pdf"},"http://lsa.colorado.edu/papers/dp1.LSAintro.pdf"),(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4"},"Usman Malik, ",(0,o.kt)("a",{parentName:"li",href:"https://stackabuse.com/python-for-nlp-sentiment-analysis-with-scikit-learn/"},"https://stackabuse.com/python-for-nlp-sentiment-analysis-with-scikit-learn/"),(0,o.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-5"},"Kaggle, ",(0,o.kt)("a",{parentName:"li",href:"https://www.kaggle.com/crowdflower/twitter-airline-sentiment"},"https://www.kaggle.com/crowdflower/twitter-airline-sentiment"),(0,o.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-6"},"Wang, Lan and Wan, Yuan. \u201cSentiment Classification of Documents Based on Latent Semantic Analysis.\u201d Advanced Research on Computer Education, Simulation and Modeling, 2011, pp. 356\u201361.",(0,o.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-7"},"Bergamaschi, Sonia, and Po, Laura. \u201cComparing LDA and LSA Topic Models for Content-Based Movie Recommendation Systems.\u201d Web Information Systems and Technologies, 2015, pp. 247\u201363.",(0,o.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-8"},"Deerwester, S., Dumais, S.T., Furnas, G.W., Landauer, T.K. and Harshman, R. (1990), Indexing by latent semantic analysis. J. Am. Soc. Inf. Sci., 41: 391-407. ",(0,o.kt)("a",{parentName:"li",href:"https://doi.org/10.1002/(SICI)1097-4571(199009)41:6"},"https://doi.org/10.1002/(SICI)1097-4571(199009)41:6"),"<391::AID-ASI1>3.0.CO;2-9",(0,o.kt)("a",{parentName:"li",href:"#fnref-8",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-9"},'Firth, J.R. (1957). "A synopsis of linguistic theory 1930-1955". Studies in Linguistic Analysis: 1\u201332. Reprinted in F.R. Palmer, ed. (1968). Selected Papers of J.R. Firth 1952-1959. London: Longman.',(0,o.kt)("a",{parentName:"li",href:"#fnref-9",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-10"},"SK-Learn, ",(0,o.kt)("a",{parentName:"li",href:"https://scikit-learn.org/0.19/datasets/twenty_newsgroups.html"},"https://scikit-learn.org/0.19/datasets/twenty_newsgroups.html"),(0,o.kt)("a",{parentName:"li",href:"#fnref-10",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-11"},"Halko, et al., 2009 ",(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/0909.4061"},"https://arxiv.org/abs/0909.4061"),(0,o.kt)("a",{parentName:"li",href:"#fnref-11",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-12"},"Tits, No\xe9 & El Haddad, Kevin & Dutoit, Thierry. (2020). Exploring Transfer Learning for Low Resource Emotional TTS. 10.1007/978-3-030-29516-5_5.",(0,o.kt)("a",{parentName:"li",href:"#fnref-12",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-13"},"Google Cloud STT documentation, ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/speech-to-text/docs/adaptation-model"},"https://cloud.google.com/speech-to-text/docs/adaptation-model"),(0,o.kt)("a",{parentName:"li",href:"#fnref-13",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-14"},"Mozilla Deep Speech, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/mozilla/DeepSpeech"},"https://github.com/mozilla/DeepSpeech"),(0,o.kt)("a",{parentName:"li",href:"#fnref-14",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-15"},"Awni Hannun, Carl Case, Jared Casper, Bryan Catanzaro, Greg Diamos, Erich Elsen, Ryan Prenger, Sanjeev Satheesh, Shubho Sengupta, Adam Coates, & Andrew Y. Ng. (2014). Deep Speech: Scaling up end-to-end speech recognition. ",(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1412.5567"},"https://arxiv.org/abs/1412.5567"),".",(0,o.kt)("a",{parentName:"li",href:"#fnref-15",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},5605:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mountain-a8ad3b437fbd8e2eab1336f4c96c6830.png"},7403:function(e,t,n){"use strict";t.Z=n.p+"assets/images/sentiment-750b472927108d0898224d222ebeace2.png"},8957:function(e,t,n){"use strict";t.Z=n.p+"assets/images/vecs-6eb5e6496591e409ae8ed60487f4eac5.png"}}]);