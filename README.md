## Product Listing with Next.JS
A simple product listing with dynamic routes and basic information like brand, name, price, description, stocks etc.

### API
* Look for `pages/api/decathlon-api`, created a handling for multiple API calls.
* `https://api.airtable.com/v0/apppEuXVVoYReUqej.`


### Styling
* Product Listing used mobile-first approach, CSS modules, SASS and BEM-Methodology for styling.


### Running the local environment ###

To run the project on your localhost:
  1. Clone the repository and run `git clone https://github.com/jrso15/decathlon-nextjs.git`.
  2. Go to the project `cd decathlon-nextjs`
  3. Get the required node modules by installing `npm i` or `npm install`
  4. Look for `sample.env` file and Create `.env.local` file and copy what's in there.
  5. Change the required value for API TOKEN in `.env.local`.
  5. Run `npm run dev` to run the project.
  7. Confirm everything is set up properly by opening [http://localhost:3000](http://localhost:3000) in your browser.
  
 ### To Run unit testing ###
 * Just run `npm run test` and look for the results in your terminal.
 
 ### Data Fetching ###
 * Used `getStaticProps` for rendering data, Next.js will pre-render the page at build time using the props returned by `getStaticProps`.
 * Used `getStaticPaths` for dynamic routes. Next.js will statically pre-render all the paths specified by getStaticPaths.

### Another way for rendering data in Next.js ###
 * Client side rendering

example:
```const [productData, setProductData] = useState([]);

const fetchData = async () => {
  let productList = await getProductList();
  setProductData(productList);
};

useEffect(() => {
  fetchData();
}, []); 
```



* Dynamic routes if client side rendering

example:
```const router = useRouter();
const { id } = router.query;
const [productDetails, setProductData] = useState([]);

const fetchProductInformation = async () => {
  let productDetails = await getProductInformation(id);
  setProductData(productDetails);
};

useEffect(() => {
  fetchProductInformation();
}, []);
```



## Deploy on Vercel or Netlify
Vercel is the fastest way to deploy your Next.js application with zero configuration.
When deploying to Vercel, the platform automatically detects Next.js, runs next build, and optimizes the build output.

* You can also do this with `Netlify`, similar on how you will deploy in Vercel.

1. Go to [https://vercel.com/](https://vercel.com/) or [https://www.netlify.com/](https://www.netlify.com/)
2. Import Git Repository.
3. Go to the Environment Variables page of your Project Settings to declare an Environment Variable for your deployment.
4. and you just need to wait finishing the deployment in vercel or netlify.



## Deploy Next.js Static Website with GCP Cloud Storage
You can also build a static website with Next.js by adding a `"build": "next build && next export"` in package.json.

1. Create a Bucket With Public Access
   * Create a bucket
   * Select a location where you store the data.
   * Select a default storage class for your data.
   * Select access control for your bucket. `Fine-grained` making all files in your bucket publicly accessible is easier and faster.
   * Select create to create the bucket.
2. Make it Public
   * Click the vertical ellipsis on the right side and click `Edit bucket permissions`.
   * Add a member called `allUsers` with the role Storage Object Viewer.
   * Click `Allow Public Access` to make it public.
3. Build the Next.js project
    * Build your app with this command `npm run build`
    * After that all the built assets can be found in the out folder.
    * Run the following command.
```javascript
  "scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start"
  },
```
4. Select all files inside out folder where you can find build files.
5. Upload and Test.
   * Click the file index.html.
   * Copy the link in `Public URL`.
   * If the site is not working, put the buket name in the url like this. `https://<BUCKET_NAME>.storage.googleapis.com/index.html`.


