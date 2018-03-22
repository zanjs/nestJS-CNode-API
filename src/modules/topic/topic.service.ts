import { Component, Query } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

export class TopicService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://cnodejs.org/api/v1/',
    });
  }

  async list(query: object): Promise<object> {
    const req = await this.client.get('topics', {
      params: query,
    });
    return req.data;
  }

  async one(id: string): Promise<object> {
    const req = await this.client.get('topic/' + id);
    return req.data;
  }
}