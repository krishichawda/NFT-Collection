export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId
    // As all the images are uploaded on github, we can extract the images from github directly
    const image_url = "https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/";
    // The api is sending back metadata for a crypto dev
    // To make out collection compatible with Opensea, we need to follow some metedata standards
    // while sending back the response from the api
    res.status(200).json({
        name: "Crypto Dev #" + tokenId,
        description: "Crypto Dev is a collection of developers in crypto",
        image: image_url + tokenId + ".svg",
    });
}