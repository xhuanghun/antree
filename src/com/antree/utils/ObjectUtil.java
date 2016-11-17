package com.antree.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import org.apache.commons.io.IOUtils;


public class ObjectUtil {
	public ObjectUtil() {
	}

	public static byte[] objectToBytes(File object) {
		FileInputStream in = null;
		ByteArrayOutputStream baos = null;
		try {
			in = new FileInputStream(object);
			baos = new ByteArrayOutputStream();
			IOUtils.copy(in, baos);
			byte[] bytes = baos.toByteArray();

			return bytes;
		} catch (Exception e) {
			System.out.println(e);
			return null;
		} finally {
			IOUtils.closeQuietly(in);
			IOUtils.closeQuietly(baos);
		}
	}

	@SuppressWarnings("unchecked")
	private <T> T bytesToObject(byte[] bytes) throws IOException,
			ClassNotFoundException {
		ByteArrayInputStream bais = new ByteArrayInputStream(bytes);
		ObjectInputStream ois = new ObjectInputStream(bais);
		Object object = ois.readObject();
		bais.close();
		ois.close();
		return (T) object;
	}

}
