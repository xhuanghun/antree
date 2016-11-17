package com.antree.servlet;
import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.antree.utils.SessionUtils;

public class ImageServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	private int width = 60;

	private int height = 20;

	private int codeCount = 4;

	private int x = 0;

	private int fontHeight;

	private int codeY;

	char[] codeSequence = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
			'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
			'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
			'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };

	@Override
	protected void doGet(HttpServletRequest arg0, HttpServletResponse arg1)
			throws ServletException, IOException {

	}

	@Override
	protected void doPost(HttpServletRequest arg0, HttpServletResponse arg1)
			throws ServletException, IOException {
		doPost(arg0, arg1);
	}

	public void init() throws ServletException {
		String strWidth = this.getInitParameter("width");
		String strHeight = this.getInitParameter("height");
		String strCodeCount = this.getInitParameter("codeCount");
		try {
			if (strWidth != null && strWidth.length() != 0) {
				width = Integer.parseInt(strWidth);
			}
			if (strHeight != null && strHeight.length() != 0) {
				height = Integer.parseInt(strHeight);
			}
			if (strCodeCount != null && strCodeCount.length() != 0) {
				codeCount = Integer.parseInt(strCodeCount);
			}
		} catch (NumberFormatException e) {
		}
		x = width / (codeCount + 1);
		fontHeight = height;
		codeY = height;
	}

	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, java.io.IOException {
		BufferedImage buffImg = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);
		Graphics2D g = buffImg.createGraphics();
		Random random = new Random();
		g.setColor(getRandColor(220, 250));
		g.fillRect(0, 0, width, height);
		Font font = new Font("黑体", Font.BOLD, fontHeight-5);
		g.setFont(font);
		
		g.setColor(getRandColor(120,200));
		for(int i=0;i<150;i++){    //550
		   int x=random.nextInt(width);
		   int y=random.nextInt(height);
		   g.drawOval(x,y,0,0);  
		}
        StringBuffer randomCode = new StringBuffer();
		for (int i = 0; i < codeCount; i++) {
			String strRand = String.valueOf(codeSequence[random.nextInt(62)]);
			g.setColor(getRandColor(20, 130));
			g.drawString(strRand, (i + 1) * x - 7, codeY - 5);
			randomCode.append(strRand);
		}
		SessionUtils.setValidateCode(req, randomCode.toString().toLowerCase());
		resp.setHeader("Pragma", "no-cache");
		resp.setHeader("Cache-Control", "no-cache");
		resp.setDateHeader("Expires", 0);
		resp.setContentType("image/jpeg");
		ServletOutputStream sos = resp.getOutputStream();
		ImageIO.write(buffImg, "jpeg", sos);
		sos.close();
	}

	public static Color getRandColor(int num1, int num2) {
		Random random = new Random();	
		if (num1 > 255)
			num1 = 255;
		if (num2 > 255)
			num2 = 255;
		int r = num1 + random.nextInt(num2 - num1);
		int g = num1 + random.nextInt(num2 - num1);
		int b = num1 + random.nextInt(num2 - num1);
		return new Color(r, g, b);
	}

}
