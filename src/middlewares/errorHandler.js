export const errorHandler = (err,req,res)=>{
    res.status(500).json({
		status: 500,
		message: "Something went wrong",
		data: err.message
		// hata nesnesinden alınan belirli hata mesajı
    }
);
}

export default errorHandler;