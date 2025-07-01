so firsly the get preview method in the db doesn't work in the free plan so we have to use the get view method for viewing and displaying the images in the frontend. both works same just difference is that in case of preview the image comes resized automatically but in case of view it doesn't
also there was error in my allpost method where i was using wrong the component in the wrong way or should i say rendering since i was not passing props correctly as i was not returning anything because in the post card component i was passing 4 features as destructring but in my post.jsx i was just passing post that is<PostCard post = {post}/> instead i should be destructring like <PostCard {...post}/>
rest were wrong syntax issues and many changes have occured after 2023 so refer to docs .
future scope : 
security
ui 
more smootheness